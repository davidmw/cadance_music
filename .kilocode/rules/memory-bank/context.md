# Current Context: Cadance Marketing Site

## Current State
Static, multi-page marketing site (GitHub Pages) with shared design system and progressive enhancement JavaScript.

Primary pages:
- Teacher homepage: [`index.html`](index.html:1)
- Musicians / rights holders: [`publishers/index.html`](publishers/index.html:1) (+ safety redirect [`publishers.html`](publishers.html:1))
- Pricing & plans: [`pricing/index.html`](pricing/index.html:1)
- Campaign landers: [`reddit/index.html`](reddit/index.html:1), [`barrenotes/index.html`](barrenotes/index.html:1)
- How-to videos: [`how-to.html`](how-to.html:1)
- Music training resources: [`music-training.html`](music-training.html:1)
- Partners: [`partners.html`](partners.html:1)
- Patron directory: [`patrons/index.html`](patrons/index.html:1)
- Blog: [`blog/index.html`](blog/index.html:1)
- Support: [`faq.html`](faq.html:1), [`privacy.html`](privacy.html:1)

Private / internal pages (no links in):
- BarreNotes social proof screenshots: [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)

## Current Implementation Notes
- **Pricing cards** are consistent across the pricing page and both landing pages (Spark / Artist / Patron).
  - Artist remains the hero tier ("Most Popular"), Patron is now *calm* (no “Supporter” pill / aura glow), and cards size to content (no forced equal heights).
  - Styling lives in [`styles.components.css`](styles.components.css:1736) and markup in [`pricing/index.html`](pricing/index.html:93), [`reddit/index.html`](reddit/index.html:242), [`barrenotes/index.html`](barrenotes/index.html:259).
- **v3 shipped**: removed the “Coming with v3” release badge from the site (pricing + landing pages) and removed `.tier-pill--v3` styling.
- **Landing-page App Store CTA**: landing CTA uses the same base button styling as home via `.btn.btn-primary`, with landing-specific sizing/centering.
  - CTA copy: “Download Free - Start Teaching Better”
  - Markup: [`reddit/index.html`](reddit/index.html:79), [`barrenotes/index.html`](barrenotes/index.html:79)
  - Styling/sizing: landing-specific centering + width lives in [`styles.components.css`](styles.components.css:1044)

- **Landing-page hero copy**: Reddit landing hero headline updated.
  - Markup: [`reddit/index.html`](reddit/index.html:76)

- **Landing-page CTA microcopy cleanup**: removed the two “benefits-note” lines directly below the top CTA on both landing pages.
  - Markup: [`reddit/index.html`](reddit/index.html:76), [`barrenotes/index.html`](barrenotes/index.html:76)

- **Tempo demo video**: swapped `Tempo_demo.mp4` → `BalletTempoDemoV1CroppedComposite.mp4` and updated the How To “Changing tempo” poster to match the new video.
  - Markup: [`reddit/index.html`](reddit/index.html:85), [`how-to.html`](how-to.html:106)
  - New asset: [`videos/BalletTempoDemoV1CroppedComposite_poster.jpg`](videos/BalletTempoDemoV1CroppedComposite_poster.jpg:1)

- **Pricing copy + emphasis tweaks**:
  - Removed “Supporter” pill + premium aura from Patron tier across pricing + landing pages.
  - Increased Artist tier title + price typography (scoped to `.pricing-tier--popular`).
  - Reworded tier perk labels: Artist “Adds:” → “Unlocks:”; Patron “Adds:” → “Gains:”.
  - Markup: [`pricing/index.html`](pricing/index.html:119), [`reddit/index.html`](reddit/index.html:260), [`barrenotes/index.html`](barrenotes/index.html:276)
  - Styling: [`styles.components.css`](styles.components.css:1923)
- **Pricing hero**: removed the Pricing page hero image; Pricing now uses a text-only hero section.
  - **Testimonials**: cards are tappable (CSS-only modal via `:target`) and include an always-visible “Click/Tap to read more” affordance.
  - Styles: [`styles.components.css`](styles.components.css:190)
- **JavaScript is not a placeholder**: [`script.js`](script.js:1) provides progressive enhancement (parallax + mobile menu toggle). Microsoft Clarity is installed site-wide.

- **Private screenshots gallery**: [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)
  - `noindex,nofollow` meta.
  - Cards are sorted by `data-post-date` newest→oldest and laid out in two columns (fill left column first, then right).
  - Crawlers discouraged via `Disallow: /barrenotes/BarreNotesPosts/` in [`robots.txt`](robots.txt:1).

## Next Steps
- None.
