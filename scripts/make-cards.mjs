// Draws the hero card in README.md, in the language of carlosiborra.com: a glass-like panel
// on navy (or cream), the site's serif and sans set as outlines, contour lines with a route.
// It comes in dark and light:
//
//   assets/hero-{dark,light}.svg
//
//   node scripts/make-cards.mjs <path to the carlosiborra.com repository>
//
// Inputs, all local: the site's two font files. No network, no tokens. Needs python3 with
// `pip install fonttools brotli` (set PYTHON to the interpreter to use). Deterministic.

import { execFileSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const site = process.argv[2];
if (!site) {
  console.error("usage: node scripts/make-cards.mjs <path to the carlosiborra.com repository>");
  process.exit(1);
}
const here = dirname(fileURLToPath(import.meta.url));
const SERIF = join(site, "public/fonts/Literata/Literata-VariableFont_opsz,wght.woff2");
const SANS = join(site, "public/fonts/Red Hat Display/RedHatDisplay-VariableFont_wght.woff2");

// ---------- text as outlines ----------
const serif = (text, size, tracking = -0.01) => ({ font: SERIF, axes: { wght: 400, opsz: 72 }, size, tracking, text });
const sans = (text, size, wght = 500, tracking = 0) => ({ font: SANS, axes: { wght }, size, tracking, text });
function outlines(requests) {
  const out = execFileSync(process.env.PYTHON ?? "python3", [join(here, "lib/textpath.py")], {
    input: JSON.stringify(requests),
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(out.toString());
}

// ---------- terrain: isolines of a smooth noise field (marching squares) ----------
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

function terrain({ W, H, cell, levels, dx, dy }) {
  const field = (x, y) =>
    0.62 * noise((x + dx) / 170 + 4.1, (y + dy) / 80 + 1.3) +
    0.28 * noise((x + dx) / 70 + 9.7, (y + dy) / 34 + 5.2) +
    0.1 * noise((x + dx) / 26 + 2.2, (y + dy) / 13 + 8.8);
  const cols = Math.ceil(W / cell) + 1;
  const rows = Math.ceil(H / cell) + 1;
  const grid = Array.from({ length: rows }, (_, j) => Array.from({ length: cols }, (_, i) => field(i * cell, j * cell)));
  let lo = Infinity;
  let hi = -Infinity;
  for (const row of grid) for (const v of row) (lo = Math.min(lo, v)), (hi = Math.max(hi, v));
  const key = (p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;

  const isoline = (level) => {
    const segs = [];
    const lerp = (a, b) => (level - a) / (b - a);
    for (let j = 0; j < rows - 1; j++) {
      for (let i = 0; i < cols - 1; i++) {
        const tl = grid[j][i];
        const tr = grid[j][i + 1];
        const br = grid[j + 1][i + 1];
        const bl = grid[j + 1][i];
        const x = i * cell;
        const y = j * cell;
        const top = [x + lerp(tl, tr) * cell, y];
        const right = [x + cell, y + lerp(tr, br) * cell];
        const bottom = [x + lerp(bl, br) * cell, y + cell];
        const left = [x, y + lerp(tl, bl) * cell];
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
    // join the segments into polylines
    const ends = new Map();
    segs.forEach((s, n) => {
      for (const p of s) {
        const k = key(p);
        if (!ends.has(k)) ends.set(k, []);
        ends.get(k).push(n);
      }
    });
    const used = new Array(segs.length).fill(false);
    const next = (p) => (ends.get(key(p)) ?? []).find((n) => !used[n]);
    const extend = (line) => {
      for (let m = next(line[line.length - 1]); m !== undefined; m = next(line[line.length - 1])) {
        used[m] = true;
        const [a, b] = segs[m];
        line.push(key(a) === key(line[line.length - 1]) ? b : a);
      }
    };
    const lines = [];
    for (let n = 0; n < segs.length; n++) {
      if (used[n]) continue;
      used[n] = true;
      const line = [...segs[n]];
      extend(line);
      line.reverse();
      extend(line);
      if (line.length > 3) lines.push(line);
    }
    return lines;
  };
  return Array.from({ length: levels }, (_, k) => isoline(lo + ((k + 1) / (levels + 1)) * (hi - lo)));
}

const pathD = (line) => "M" + line.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join("L");

// ---------- the site's palette ----------
const THEMES = {
  dark: {
    top: "#0b1230", bottom: "#050a1e", ink: "#faf0e6", inkSoft: "#e1dad4", accent: "#faff6d",
    line: "#e1dad4", lineStrong: "#faf0e6", lineAlpha: 0.11, strongAlpha: 0.24,
    chipFill: "#faf0e6", chipFillAlpha: 0.06, chipStrokeAlpha: 0.22, softAlpha: 0.72, mutedAlpha: 0.55,
    rimA: ["#ffffff", 0.3], rimB: ["#ffffff", 0.05], rimC: ["#96aaff", 0.14], sheen: 0.05,
    cell: ["#e1dad4", "#faff6d", "#faff6d", "#faff6d", "#faff6d"], cellAlpha: [0.08, 0.2, 0.38, 0.6, 0.86],
  },
  light: {
    top: "#fbf4ec", bottom: "#f1e6d9", ink: "#050a1e", inkSoft: "#192332", accent: "#64652b",
    line: "#192332", lineStrong: "#050a1e", lineAlpha: 0.11, strongAlpha: 0.26,
    chipFill: "#050a1e", chipFillAlpha: 0.04, chipStrokeAlpha: 0.2, softAlpha: 0.74, mutedAlpha: 0.58,
    rimA: ["#ffffff", 0.95], rimB: ["#ffffff", 0.3], rimC: ["#785a32", 0.2], sheen: 0.6,
    cell: ["#192332", "#64652b", "#64652b", "#64652b", "#64652b"], cellAlpha: [0.08, 0.24, 0.44, 0.7, 1],
  },
};

const W = 800;
const RX = 18;

// the glass slab: gradient panel, a lit rim (bright top left, cool bounce far side) and a sheen
function slab(c, H, id) {
  return `<defs>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.top}"/><stop offset="1" stop-color="${c.bottom}"/></linearGradient>
    <linearGradient id="${id}-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.rimA[0]}" stop-opacity="${c.rimA[1]}"/>
      <stop offset="0.4" stop-color="${c.rimB[0]}" stop-opacity="${c.rimB[1]}"/>
      <stop offset="0.7" stop-color="${c.rimB[0]}" stop-opacity="${c.rimB[1]}"/>
      <stop offset="1" stop-color="${c.rimC[0]}" stop-opacity="${c.rimC[1]}"/>
    </linearGradient>
    <radialGradient id="${id}-sheen" cx="0" cy="0" r="1" gradientTransform="translate(0 0) scale(${W * 0.9} ${H * 1.1})" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="${c.sheen}"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="${id}-clip"><rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${RX}"/></clipPath>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${RX}" fill="url(#${id}-bg)"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${RX}" fill="url(#${id}-sheen)"/>`;
}
const rim = (c, H, id) =>
  `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${RX}" fill="none" stroke="url(#${id}-rim)" stroke-width="1"/>`;

// ---------- hero ----------
function hero(theme) {
  const c = THEMES[theme];
  const H = 236;
  const id = `hero-${theme}`;
  const [headline, role, ...chips] = outlines([
    serif("Carlos Iborra", 54),
    sans("Software & Data Engineer in Madrid", 19, 500),
    sans("AI infrastructure", 14.5, 600),
    sans("Data engineering", 14.5, 600),
    sans("Developer tools", 14.5, 600),
  ]);
  const PAD = 44;
  let cx = PAD;
  const chipSvg = chips
    .map((t) => {
      const w = Math.round(t.width + 30);
      const g = `<g transform="translate(${cx} 158)"><rect width="${w}" height="32" rx="16" fill="${c.chipFill}" fill-opacity="${c.chipFillAlpha}" stroke="${c.ink}" stroke-opacity="${c.chipStrokeAlpha}"/><path transform="translate(15 20.8)" d="${t.d}" fill="${c.ink}" fill-opacity="${c.softAlpha + 0.1}"/></g>`;
      cx += w + 10;
      return g;
    })
    .join("\n    ");

  const lines = terrain({ W, H, cell: 5, levels: 11, dx: 130, dy: 20 });
  const contours = lines
    .map((ls, k) => {
      const strong = k % 3 === 1;
      return `<path d="${ls.map(pathD).join("")}" stroke="${strong ? c.lineStrong : c.line}" stroke-opacity="${strong ? c.strongAlpha : c.lineAlpha}" stroke-width="${strong ? 1.1 : 0.9}"/>`;
    })
    .join("\n      ");
  const route = Array.from({ length: 81 }, (_, n) => {
    const x = (n / 80) * W;
    return [x, 214 + Math.sin(x / 96 + 0.9) * 9 + Math.sin(x / 33 + 2) * 2.5];
  });
  const marker = route[Math.round(80 * 0.78)];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <title>Carlos Iborra. Software and data engineer in Madrid: AI infrastructure, data engineering, developer tools.</title>
  ${slab(c, H, id)}
  <defs>
    <linearGradient id="${id}-fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0.38" stop-color="#fff" stop-opacity="0"/><stop offset="0.78" stop-color="#fff" stop-opacity="1"/>
    </linearGradient>
    <mask id="${id}-mask"><rect width="${W}" height="${H}" fill="url(#${id}-fade)"/></mask>
    <linearGradient id="${id}-routefade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.12" stop-color="#fff" stop-opacity="1"/>
      <stop offset="0.9" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <mask id="${id}-routemask"><rect width="${W}" height="${H}" fill="url(#${id}-routefade)"/></mask>
  </defs>
  <g clip-path="url(#${id}-clip)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <g mask="url(#${id}-mask)">
      ${contours}
    </g>
    <g mask="url(#${id}-routemask)">
      <path d="${pathD(route)}" stroke="${c.accent}" stroke-width="1.7" stroke-opacity="0.9"/>
      <circle cx="${marker[0].toFixed(1)}" cy="${marker[1].toFixed(1)}" r="3.4" fill="${c.accent}" stroke="none"/>
    </g>
  </g>
  <path transform="translate(${PAD} 96)" d="${headline.d}" fill="${c.ink}"/>
  <path transform="translate(${PAD} 132)" d="${role.d}" fill="${c.ink}" fill-opacity="${c.softAlpha}"/>
  ${chipSvg}
  ${rim(c, H, id)}
</svg>
`;
}

for (const theme of Object.keys(THEMES)) {
  await writeFile(new URL(`../assets/hero-${theme}.svg`, import.meta.url), hero(theme));
  console.log(`assets/hero-${theme}.svg`);
}
