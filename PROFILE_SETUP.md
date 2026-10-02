# Profile design notes

Reviewed on 19 September 2026. This is maintenance documentation, not profile copy.

## Direction

A compact personal introduction, not a project portfolio, a corporate resume, or a statistics dashboard.

The profile describes Carlos's interest in learning through building, creating applications end to end, experimenting with technology, and making useful products. Named projects, including Ralphban, are intentionally absent.

## What changed

- Preserve the exact original GIF URL and display it at a controlled 720px width, without fixing its height. Narrow layouts can shrink it normally.
- Replace the oversized underlined name and stacked identity sections with a small centered identity and compact contact navigation.
- Replace the long introduction, four separate exploration bullets, and engineering manifesto with two personal paragraphs and a single goal callout.
- Present interests and tools as two plain-text rows with small monospace labels. No code-background chips, giant icons, or widget services.
- Keep the short personal footer and all three existing contact destinations.

The existing generated header SVGs remain in the repository but are not referenced by the README. This revision does not change their contents, delete history, modify other repositories, or alter native account pins.

## Site-language revision (2 October 2026)

Brings the look of carlosiborra.com into the profile without changing the rules above: the original GIF stays, there are still no projects, widgets or workflows.

- A Vim statusline line and `:`-style contact links (adds a `:notes` link to carlosiborra.com/notes), echoing the site's hero.
- Two contour-line dividers with a route, drawn by `scripts/make-topo.mjs` from a noise field in the site's cream, navy and yellow-olive. Light and dark variants through `<picture>`; decorative, so no essential content is inside them.
- Copy moved closer to the site's About text ("I wonder how that works?"), and Terraform, Neovim and build systems added, all of which the site already states.
- Unchanged on purpose: the employer is not named, and no project is shown.

## Research and selection

These are references for specific design patterns, not an objective ranking of developers or their profiles. No biography, achievements, artwork, or personal claims were copied.

- [Anthony Fu](https://github.com/antfu/antfu): compact native HTML navigation using samp. Applied to the contact row rather than to a new badge service.
- [Caneco](https://github.com/caneco/caneco): selective information and a small heading rather than a long CV. Applied to the identity and compact technical interests.
- [Gift Egwuenu](https://github.com/lauragift21/lauragift21): personal narrative and ordinary links. Applied to the introduction and personal footer.
- [Sindre Sorhus](https://github.com/sindresorhus/sindresorhus): recognizable personal animation. Applied by retaining Carlos's existing GIF, not by copying the surrounding retro widgets.
- [Cassidy Williams](https://github.com/cassidoo/cassidoo): individual voice. Applied to the emphasis on why Carlos builds; the named-project structure was not adopted.
- [Simon Willison](https://github.com/simonw/simonw): substantive writing/activity links. Not adopted here because a self-updating feed is not needed for the requested project-free profile.
- [DenverCoder1](https://github.com/DenverCoder1/DenverCoder1) and [Nate Moore](https://github.com/natemoo-re/natemoo-re): alternative richer compositions. Their additional widgets/integrations are not needed for this direction.
- [Profile README gallery](https://github.com/abhisheknaiidu/awesome-github-profile-readme): used to compare minimal, narrative, animated, and widget-heavy approaches rather than to maximize the number of features.

## Configuration and dependencies

No setup is required. There is no new GitHub Actions workflow, PAT, OAuth app, Pages deployment, WakaTime integration, or paid service. The only image request in the README remains the existing GitHub-hosted header.

The existing Website, LinkedIn, and Email destinations are preserved. Preserving an address is not a claim that the remote website or mailbox was live-tested.

## Verification boundary (site-language revision)

Rendered through GitHub's own Markdown API (so every tag survived GitHub's sanitiser) and previewed locally with github-markdown-css at 320, 390, 768 and 1024px in light and dark: no horizontal overflow, the statusline and contact row stay on one line at 320px, dividers scale with the page. Not verified: the live github.com page, the signed GIF URL and the SVG paths as served by GitHub (relative `assets/` paths are rewritten by github.com, not by the API).

## Verification boundary

Source checks cover the allowed markup, original header URL, single image, preserved contact destinations, and exclusion of projects, widgets, and WakaTime.

Local Chromium checks cover light/dark layouts at 320, 390, 768, and 1024px widths. The preview uses a frame cropped from Carlos's supplied screenshot when the original GIF cannot load, and labels this explicitly. It is actual supplied artwork, not a newly generated or reconstructed header. That preview fallback is NOT part of the published README.

Direct network access to the original GIF and live GitHub rendering was unavailable in the editing container. These checks do not verify animation timing, the full animation, or exact live GitHub rendering. The user's screenshot establishes how the original asset looked at that captured moment.

The local stylesheet uses the relevant inspected rules from [github-markdown-css](https://github.com/sindresorhus/github-markdown-css); it is not injected into GitHub. The published README uses only native Markdown/HTML.

## Platform references

- [GitHub profile README documentation](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
- [GitHub writing and image syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
