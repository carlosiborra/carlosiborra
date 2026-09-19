# Profile design and setup

## Status

This branch is a redesign proposal following feedback that the previous profile was poorly designed. It is not a claim that the final visual composition has been approved or verified on GitHub.

## Design changes

The previous README repeated similar ideas across an introduction, interests, working style, and toolkit, then placed the product demo inside a disclosure. This revision shortens the introduction, keeps the original GIF as the primary visual, makes Ralphban's demo visible, and moves a small toolkit to the footer. It removes the secondary activity card and version badge rather than adding more independent visual styles.

The rendered text is reduced from 328 to 139 words, counted from the complete parsed document including collapsed content in the old version. This is a measure of copy length, not proof of design quality or page-height reduction: the revised demo is visible by default.

## Configuration

None. No workflow, token, OAuth connection, Pages deployment, or paid service has been added. Account pins, contribution settings, secrets, and other repositories are unchanged.

The README retains three image references:

- The original GitHub-hosted header GIF. Existing local light/dark SVGs are selected for reduced motion.
- The existing public Ralphban `images/demo-ultracropped.gif`, shown directly with install/source links. Repository metadata reports 1,607,486 bytes. Its rendered dimensions and motion still need visual review.
- A 240px-wide Skill Icons row, with a dark source and a light default. Labels are provided as alternative text.

The reduced-motion header is selected by a media condition; it is not an automatic fallback when the GIF fails to load. The Ralphban GIF currently has no static reduced-motion alternative; inspect this before considering the design finished.

## Verification boundary

Source inspection confirms that the header reference is preserved, coursework stays out of the showcase, meaningful image alternatives and ordinary links remain, and no workflow or credential is required.

The editing environment cannot fetch the live GitHub page or the remote image endpoints. Local checks can assess text layout, supported markup, and unavailable-image behavior, but cannot verify the real header/demo composition. No fixture media should be substituted and described as the actual result.

Keep the change in a draft PR until the exact media can be reviewed together at desktop/mobile widths and in light/dark themes. The local comparison uses a subset of GitHub-style CSS, not GitHub's live renderer.

## References

- [GitHub writing and image syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Ralphban source and media](https://github.com/carlosiborra/Ralphban)

The earlier research notes remain in Git history. A list of admired profiles or widget features is not a substitute for evaluating this profile's actual composition.
