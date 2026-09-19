# Profile setup and design notes

Reviewed on 19 September 2026. This file is maintenance documentation, not part of the rendered profile introduction.

## Required configuration

None for the current README. It does not require a personal access token, OAuth connection, GitHub Pages deployment, new Actions workflow, paid subscription, or WakaTime account.

The profile remains native Markdown/HTML. The original animated header is referenced from its existing GitHub attachment URL. The existing local header SVGs are used only when the viewer requests reduced motion.

| Element | Where it comes from | User configuration | Trade-off |
| --- | --- | --- | --- |
| Animated header | Existing GitHub-hosted attachment | None | An external asset reference; retain the local reduced-motion alternatives. |
| Technology icons | Skill Icons | Edit the icon IDs in the URL only when the toolkit actually changes | Hosted dependency; the same tools are listed in text. |
| Ralphban install link and version badge | Visual Studio Marketplace and Shields.io | None; extension ID is `carlosiborra.ralphban` | The badge may be cached or unavailable independently of the extension. The ordinary install link remains usable. |
| Expandable Ralphban demo | Existing public Ralphban repository | None | Uses `demo-ultracropped.gif` (1,607,486 bytes), not the 13,152,425-byte full demo. A closed disclosure is not a guarantee of deferred downloading. |
| Expandable public activity card | GitHub Stats Extended public endpoint | None | Best-effort hosted dependency, not a measure of skill or a complete record of work. No private-repository credential has been configured. |

Light and dark versions are selected with `<picture>` sources. The introduction, toolkit, project explanation, and navigation still work without image widgets. Do not interpret the reduced-motion alternative as an automatic network-error fallback: browser source selection is based on the media condition.

## Recommended account-level finishing touches

### Pin Ralphban first

On the GitHub profile, select **Customize your pins**, select Ralphban, move it to the first position, and save. GitHub allows up to six repositories and gists combined, but there is no reason to fill every slot. Only add other projects when they provide a useful, accurate demonstration of personal work.

The message-delivery, solar-energy-prediction, and Meadow temperature-regulator repositories were university coursework. They are not part of this profile's personal-product showcase. This change does not alter those repositories or their visibility. Existing account pins were not changed by this README update.

### Private contribution counts are optional

GitHub can show anonymized counts from private/internal repositories without revealing the repository details. This is a separate account setting: above the contribution calendar, open **Contribution settings**, then **Private contributions**.

Enable it only if that level of public activity disclosure is acceptable. It is not required for the README and does not grant the hosted stats card access to private repositories. The setting was not inspected or changed during this update.

### Retire unused WakaTime credentials

The previous workflow referenced the repository secret `WAKATIME_API_KEY`. That workflow has already been removed. In the profile repository, open **Settings → Secrets and variables → Actions** and delete that secret if it remains and is no longer used. Revoke the corresponding WakaTime key in its account settings if it is not needed elsewhere.

Secrets were not listed, read, changed, or deleted during this update. Do not paste keys into README files, issues, or chat.

## Widget selection

The goal is a personal engineering profile with useful navigation, not a dashboard of activity counters.

- **Included: Skill Icons.** A small, coherent visual vocabulary, with explicit text labels and no skill ratings.
- **Included: Marketplace version.** Product-specific information alongside a practical installation action.
- **Included: one public activity card, collapsed by default.** Secondary context without a ranking or a language chart. The original `anuraghazra/github-readme-stats` repository now declares itself unmaintained and points to GitHub Stats Extended and GitHub Readme Stats Action.
- **Not included: language percentages.** Repository composition, including coursework and generated files, is not an expertise assessment.
- **Not included: streaks, trophies, visitor counters, or a second animated headline.** These would compete with the introduction and original GIF without explaining what Carlos builds.
- **Not included: a contribution snake.** Another animation and generation workflow are unnecessary here.
- **Not included: Lowlighter Metrics or Spotify.** Rich integrations require more setup or credentials than this profile currently warrants.
- **Not included: an automatically populated blog/release feed.** Add one only when there is a verified, maintained source worth showing. Do not fabricate recent activity or publish private project names.

## More reliable statistics, only when needed

The current card is intentionally the simplest configuration. A hosted endpoint can fail or rate-limit independently of GitHub; successful source validation is not an uptime guarantee.

A future alternative is GitHub Readme Stats Action: generate an SVG and commit it to the profile repository. For public-only data, its documented setup supports the automatic `GITHUB_TOKEN`; committing the output requires `contents: write`. No broad private-repository personal access token should be added just for decorative metrics.

This alternative is **not installed**. Before enabling it, review the current action implementation, pin actions to reviewed commit SHAs, confirm an appropriate available runner, use a restrained schedule, commit only changes, and preserve the last good image when generation fails. An existing static image remains visible when the generator is temporarily unavailable. Avoid hourly README commits.

## Profile references and takeaways

These are examples selected for relevant design patterns, not an objective ranking of the best developers or profiles.

| Reference | Relevant pattern | Applied here |
| --- | --- | --- |
| Anthony Fu | Compact identity and purposeful navigation | Short introduction and direct links rather than an oversized table of contents. |
| Simon Willison | Clear evidence through projects, releases, and writing | Lead with a real product and what motivated it, not a list of coursework. |
| Sindre Sorhus | Recognizable personal voice and distinctive visual assets | Restore Carlos's own original GIF instead of imposing a generic corporate header. |
| DenverCoder1 | Structured project/tool sections and disclosures for secondary material | Curated toolkit and expandable demo/activity sections. |

## Sources

- [GitHub profile README documentation](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
- [GitHub Markdown and picture support](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Pinning profile items](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile)
- [Private contribution visibility](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/manage-visibility-settings-for-private-contributions-and-achievements)
- [Anthony Fu's profile repository](https://github.com/antfu/antfu)
- [Simon Willison's profile repository](https://github.com/simonw/simonw)
- [Sindre Sorhus's profile repository](https://github.com/sindresorhus/sindresorhus)
- [DenverCoder1's profile repository](https://github.com/DenverCoder1/DenverCoder1)
- [Profile README gallery](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [Skill Icons documentation](https://github.com/tandpfun/skill-icons)
- [Original GitHub Readme Stats maintenance notice](https://github.com/anuraghazra/github-readme-stats)
- [GitHub Stats Extended](https://github.com/stats-organization/github-stats-extended)
- [GitHub Readme Stats Action](https://github.com/stats-organization/github-readme-stats-action)
- [Lowlighter Metrics](https://github.com/lowlighter/metrics)
- [Contribution snake](https://github.com/Platane/snk)
- [Streak card](https://github.com/DenverCoder1/github-readme-streak-stats)
- [Typing SVG](https://github.com/DenverCoder1/readme-typing-svg)
- [Ralphban source](https://github.com/carlosiborra/Ralphban)
- [Ralphban on Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=carlosiborra.ralphban)

## Verification boundaries

The original header reference, public Ralphban source, extension identifier, and repository asset sizes were checked against repository data. The Marketplace listing and widget-provider documentation were also inspected.

Live image delivery from the original GIF, icon, badge, and stats endpoints could not be fetched successfully from the editing environment. Do not report those endpoints as live-tested or assume that an inaccessible fetch means the service is down. Local browser checks cover markup, media selection, disclosures, and layout, not the exact live GitHub page. Normal motion and reduced-motion behavior should also be checked on the actual profile in a browser with working network access.
