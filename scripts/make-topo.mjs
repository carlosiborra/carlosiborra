// Draws the contour dividers used in README.md (assets/topo-*.svg, one for the top and one
// for the end, each in a dark and a light variant).
// The lines are real isolines of a smooth noise field (marching squares), in the colours of
// carlosiborra.com: the same terrain language, with one route crossing it. Deterministic.
//
//   node scripts/make-topo.mjs

import { writeFile } from "node:fs/promises";

const W = 720;
const H = 72;
const CELL = 3;
const LEVELS = 9;

// seeded value noise
const hash = (x, y) => {
  let h = (x * 374761393 + y * 668265263 + 1442695041) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};
const smooth = (t) => t * t * (3 - 2 * t);
const noise = (x, y) => {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const fx = smooth(x - xi);
  const fy = smooth(y - yi);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
};
// wide, low hills seen from above: stretched along x, with finer detail on top
// each variant is a different stretch of the same terrain
const VARIANTS = [
  { file: "topo", dx: 0, dy: 0, phase: 0.6, marker: 0.62 },
  { file: "topo-end", dx: 410, dy: 37, phase: 2.3, marker: 0.3 },
];
let dx = 0;
let dy = 0;
const field = (x, y) =>
  0.62 * noise((x + dx) / 150 + 4.1, (y + dy) / 46 + 1.3) +
  0.28 * noise((x + dx) / 62 + 9.7, (y + dy) / 21 + 5.2) +
  0.1 * noise((x + dx) / 24 + 2.2, (y + dy) / 10 + 8.8);

const cols = Math.ceil(W / CELL) + 1;
const rows = Math.ceil(H / CELL) + 1;
let grid = [];
let lo = Infinity;
let hi = -Infinity;
const sample = (variant) => {
  dx = variant.dx;
  dy = variant.dy;
  grid = Array.from({ length: rows }, (_, j) =>
    Array.from({ length: cols }, (_, i) => field(i * CELL, j * CELL))
  );
  lo = Infinity;
  hi = -Infinity;
  for (const row of grid) for (const v of row) (lo = Math.min(lo, v)), (hi = Math.max(hi, v));
};

// marching squares: segments of one isoline, then joined into polylines
function isoline(level) {
  const segs = [];
  const lerp = (a, b) => (level - a) / (b - a);
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const tl = grid[j][i];
      const tr = grid[j][i + 1];
      const br = grid[j + 1][i + 1];
      const bl = grid[j + 1][i];
      const x = i * CELL;
      const y = j * CELL;
      const top = [x + lerp(tl, tr) * CELL, y];
      const right = [x + CELL, y + lerp(tr, br) * CELL];
      const bottom = [x + lerp(bl, br) * CELL, y + CELL];
      const left = [x, y + lerp(tl, bl) * CELL];
      const idx = (tl > level ? 8 : 0) | (tr > level ? 4 : 0) | (br > level ? 2 : 0) | (bl > level ? 1 : 0);
      const table = {
        1: [[left, bottom]], 2: [[bottom, right]], 3: [[left, right]], 4: [[top, right]],
        5: [[left, top], [bottom, right]], 6: [[top, bottom]], 7: [[left, top]], 8: [[left, top]],
        9: [[top, bottom]], 10: [[top, right], [left, bottom]], 11: [[top, right]], 12: [[left, right]],
        13: [[bottom, right]], 14: [[left, bottom]],
      };
      for (const s of table[idx] ?? []) segs.push(s);
    }
  }
  return join(segs);
}

function join(segs) {
  const key = (p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  const ends = new Map();
  segs.forEach((s, n) => {
    for (const p of s) {
      const k = key(p);
      if (!ends.has(k)) ends.set(k, []);
      ends.get(k).push(n);
    }
  });
  const used = new Array(segs.length).fill(false);
  const lines = [];
  const next = (p) => (ends.get(key(p)) ?? []).find((n) => !used[n]);
  for (let n = 0; n < segs.length; n++) {
    if (used[n]) continue;
    used[n] = true;
    let line = [...segs[n]];
    for (let m = next(line[line.length - 1]); m !== undefined; m = next(line[line.length - 1])) {
      used[m] = true;
      const [a, b] = segs[m];
      line.push(key(a) === key(line[line.length - 1]) ? b : a);
    }
    line.reverse();
    for (let m = next(line[line.length - 1]); m !== undefined; m = next(line[line.length - 1])) {
      used[m] = true;
      const [a, b] = segs[m];
      line.push(key(a) === key(line[line.length - 1]) ? b : a);
    }
    if (line.length > 3) lines.push(line);
  }
  return lines;
}

const d = (line) => "M" + line.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join("L");

// a route: one smooth line crossing the hills left to right, with a marker on it
const routeFor = (phase) =>
  Array.from({ length: 73 }, (_, n) => {
    const x = (n / 72) * W;
    return [x, H / 2 + Math.sin(x / 92 + phase) * 15 + Math.sin(x / 31 + 2) * 4];
  });

function svg({ line, strong, accent, name }, variant) {
  const route = routeFor(variant.phase);
  const marker = route[Math.round(72 * variant.marker)];
  const levels = Array.from({ length: LEVELS }, (_, k) => lo + ((k + 1) / (LEVELS + 1)) * (hi - lo));
  const paths = levels
    .map((level, k) => {
      const lines = isoline(level);
      const major = k % 3 === 1; // an index contour every third line, as on a map
      return `<path d="${lines.map(d).join("")}" stroke="${major ? strong : line}" stroke-opacity="${major ? 0.5 : 0.28}" stroke-width="${major ? 1 : 0.8}"/>`;
    })
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>${name}</title>
  <defs>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.14" stop-color="#fff" stop-opacity="1"/>
      <stop offset="0.86" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
  </defs>
  <g mask="url(#m)">
    ${paths}
    <path d="${d(route)}" stroke="${accent}" stroke-width="1.6" stroke-opacity="0.9"/>
    <circle cx="${marker[0].toFixed(1)}" cy="${marker[1].toFixed(1)}" r="3.2" fill="${accent}" stroke="none"/>
  </g>
</svg>
`;
}

const THEMES = {
  dark: { line: "#e1dad4", strong: "#faf0e6", accent: "#faff6d", name: "Contour lines with a route, dark" },
  light: { line: "#192332", strong: "#050a1e", accent: "#64652b", name: "Contour lines with a route, light" },
};
for (const variant of VARIANTS) {
  sample(variant);
  for (const [theme, colours] of Object.entries(THEMES)) {
    await writeFile(new URL(`../assets/${variant.file}-${theme}.svg`, import.meta.url), svg(colours, variant));
    console.log(`assets/${variant.file}-${theme}.svg`);
  }
}
