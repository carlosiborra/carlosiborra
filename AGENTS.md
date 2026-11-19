# Profile maintenance

This repository renders Carlos Iborra's GitHub profile.

## Positioning

- Carlos is a Software & Data Engineer working around AI platforms, data systems, software engineering, and product development.
- Keep the voice personal and technically credible. Not a corporate resume, not a manifesto of engineering slogans.
- Do not invent achievements, adoption figures, expertise, employer internals, or career claims. Never name the employer.

## Composition (remade 19 November 2026)

Carlos asked for a full remake. The profile is now minimal: a looping GIF, a links row, one short intro, a "Building" list, facts rows and a short footer. The old header GIF, the activity calendar, the generated SVG cards and the "no projects" rule are retired.

- `assets/home.gif` is a recording of the live carlosiborra.com homepage in dark theme: the waving hand, "Hello World!", the Vim status bar and the 3D landscape behind them. It is cropped to exclude the navbar and everything below the status bar (the hero text under it names an employer, which must never appear). Re-record with Playwright (recording-only CSS hides the navbar, subtitle, buttons and the "VISUAL LINE" text and adds space around the hand, title and status bar; call `document.getElementById("topo-bg-three").__topoInstance.setWeather("clear")` so live rain does not hide the mountains, and trim the first 5 seconds while it eases): spoof `navigator.webdriver` as false (the terrain does not start otherwise), decline the analytics banner and switch to dark in a throwaway context, then record a second context with that storage state and wait for `#topo-bg-three.is-ready`. A recording-only CSS tweak adds space above `.title-holder .status`. Crop with ffmpeg, optimise with gifsicle.
- Everything else is plain Markdown. Keep one column, natural wrapping, no em dashes or middle dots. No stats cards, streaks, trophies, counters, typing animations, snakes or widget services.
- "Building" lists only Carlos's own public work: MisRutas (misrutas.net and its mobile app, in testing; myroutes.com is not his), Herdr plugins, Ralphban, carlosiborra.com. University coursework is never presented as a personal product.
- Never expose private repository names, name the employer, or change repository visibility. Leave native account pins untouched unless asked. No workflows, tokens or paid services. WakaTime is not used.

## Validation and publication

- Read current files and revisions before changing them. Never force-push a profile update.
- Check 390px and 840px, light and dark: wrapping, image proportions, links. A local render is not the live GitHub renderer; state unverified checks plainly.
- After publishing, verify the default branch and the live page.
