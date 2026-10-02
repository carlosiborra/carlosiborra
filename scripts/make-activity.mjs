// Draws the contribution calendar in README.md (assets/activity-dark.svg and
// activity-light.svg) and rewrites the one-line summary under it, from the aggregate
// snapshot the website already publishes in its Personal Stats section:
//
//   node scripts/make-activity.mjs <path to carlosiborra.com src/data/activity.json>
//
// The snapshot holds daily counts and totals only: no repository names, no tokens, no
// network calls here. Levels are quantiles of the active days, as on the site, so a few
// huge days (repository imports) do not wash the rest out.

import { readFile, writeFile } from "node:fs/promises";

const source = process.argv[2];
if (!source) {
  console.error("usage: node scripts/make-activity.mjs <path to activity.json>");
  process.exit(1);
}
const data = JSON.parse(await readFile(source, "utf8"));
const days = data.daily;
const W = 720;
const sum = (d) => d.github + d.gitlab;

const nonZero = days.map(sum).filter((n) => n > 0).sort((a, b) => a - b);
const q = (p) => nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))] ?? 1;
const t = [q(0.25), q(0.5), q(0.75)];
const level = (n) => (n === 0 ? 0 : n <= t[0] ? 1 : n <= t[1] ? 2 : n <= t[2] ? 3 : 4);

const weekday = (iso) => (new Date(`${iso}T00:00:00Z`).getUTCDay() + 6) % 7; // Mon = 0
const offset = weekday(days[0].date);
const weeks = Math.ceil((days.length + offset) / 7);
const pitch = W / weeks;
const cell = pitch * 0.78;
const TOP = 18; // month labels
const gridH = 7 * pitch;
const H = Math.ceil(TOP + gridH + 26); // legend

const THEMES = {
  dark: {
    muted: "#a9a39e",
    ramp: ["#e1dad4", "#faff6d", "#faff6d", "#faff6d", "#faff6d"],
    alpha: [0.09, 0.2, 0.38, 0.6, 0.86],
  },
  light: {
    muted: "#6b6761",
    ramp: ["#192332", "#64652b", "#64652b", "#64652b", "#64652b"],
    alpha: [0.08, 0.24, 0.44, 0.7, 1],
  },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const labels = [];
let lastMonth = -1;
days.forEach((d, i) => {
  const slot = i + offset;
  const col = Math.floor(slot / 7);
  const month = Number(d.date.slice(5, 7)) - 1;
  if (month !== lastMonth && slot % 7 < 7 && (i === 0 || Number(d.date.slice(8, 10)) <= 7)) {
    lastMonth = month;
    // skip a label that would overlap the previous one at the very start
    if (col * pitch < W - 30 && (!labels.length || col * pitch - labels[labels.length - 1].x > 30)) labels.push({ x: col * pitch, text: MONTHS[month] });
  }
});

function svg(theme) {
  const c = THEMES[theme];
  const rect = (x, y, l) =>
    `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cell.toFixed(1)}" height="${cell.toFixed(1)}" rx="${(cell * 0.24).toFixed(1)}" fill="${c.ramp[l]}" fill-opacity="${c.alpha[l]}"/>`;
  const cells = days
    .map((d, i) => {
      const slot = i + offset;
      return rect(Math.floor(slot / 7) * pitch, TOP + (slot % 7) * pitch, level(sum(d)));
    })
    .join("\n    ");
  const text = labels
    .map((l) => `<text x="${l.x.toFixed(1)}" y="12" fill="${c.muted}" font-size="12" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">${l.text}</text>`)
    .join("\n    ");
  const ly = TOP + gridH + 8;
  const legendX = W - (5 * (cell + 3) + 62);
  const legend = [0, 1, 2, 3, 4].map((l) => rect(legendX + 30 + l * (cell + 3), ly, l)).join("");
  const font = `font-size="12" fill="${c.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <title>Contributions per day over the last 12 months</title>
  <g>
    ${text}
    ${cells}
  </g>
  <text x="${legendX}" y="${ly + cell - 1.5}" ${font}>Less</text>
  ${legend}
  <text x="${legendX + 30 + 5 * (cell + 3) + 2}" y="${ly + cell - 1.5}" ${font}>More</text>
</svg>
`;
}

for (const theme of Object.keys(THEMES)) {
  await writeFile(new URL(`../assets/activity-${theme}.svg`, import.meta.url), svg(theme));
  console.log(`assets/activity-${theme}.svg`);
}

// the summary line (text, not an image: the essential numbers stay selectable)
const n = new Intl.NumberFormat("en-GB");
const total = data.last12Months.github + data.last12Months.gitlab;
const updated = new Date(data.generatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Madrid" });
const line = `<sub>${n.format(total)} contributions across GitHub and GitLab · ${data.last12Months.activeDays} active days · longest streak ${data.last12Months.longestStreak} days. Private and work activity included, counted anonymously. Updated ${updated}.</sub>`;
const readmeUrl = new URL("../README.md", import.meta.url);
const readme = await readFile(readmeUrl, "utf8");
const pattern = /(<!-- activity:summary -->)[\s\S]*?(<!-- \/activity:summary -->)/;
if (!pattern.test(readme)) throw new Error("README.md is missing the activity:summary markers");
await writeFile(readmeUrl, readme.replace(pattern, `$1\n  ${line}\n  $2`));
console.log("README.md summary updated");
