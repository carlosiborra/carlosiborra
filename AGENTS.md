# Profile maintenance

This repository renders Carlos Iborra's GitHub profile.

## Positioning

- Carlos is a Software & Data Engineer working around AI platforms, data systems, software engineering, and product development.
- Keep the voice personal and technically credible. Not a corporate resume, not a manifesto of engineering slogans.
- Do not invent achievements, adoption figures, expertise, employer internals, or career claims. Never name the employer.

## Composition (full remake, 19 November 2026)

Carlos asked for a full remake and chose a minimal, typographic direction that keeps only the carlosiborra.com look (navy, cream, yellow-olive). The animated GIF header, the activity calendar card and the old "no projects" rule are retired by that decision.

- One hero card, `assets/hero-{dark,light}.svg` (name, role, three focus chips, contour lines and a route), light and dark through `<picture>`. It is generated, not hand-edited: `node scripts/make-cards.mjs <path to the carlosiborra.com repo>` (python3 with `fonttools` and `brotli`; set `PYTHON` to pick the interpreter). It reads only the site's two font files, makes no network calls and needs no tokens.
- Everything else is plain Markdown: contact row, one short intro, a "Building" list (Herdr plugins, Ralphban, carlosiborra.com), the facts rows (Based in, Studied, Working with, Exploring, Writing) and a short personal footer. Essential content stays selectable text.
- Keep one column and natural wrapping. No Skill Icons, stats cards, streaks, trophies, visitor counters, language charts, typing animations, snakes, or widget services. No Vim-statusline gimmicks.
- Only list projects that are Carlos's own and public. University coursework (message-delivery, solar-energy-prediction, Meadow, bus planning) is never presented as a personal product.
- Never expose private repository names or change repository visibility. Leave native account pins untouched unless asked.
- No workflows, tokens, OAuth apps, private-repository access, paid services, or account-setting changes are needed. WakaTime is not used; never restore it.

## Validation and publication

- Read current files and revisions before changing them. Never force-push a profile update.
- Check 390px and 840px, light and dark: wrapping, image proportions, links. A local render is not the live GitHub renderer; state unverified checks plainly.
- After publishing, verify the default branch and the live page.
