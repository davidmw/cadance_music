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
  - Artist remains the hero tier ("Most Popular"), Patron reads as premium, and cards size to content (no forced equal heights).
  - Styling lives in [`styles.components.css`](styles.components.css:1511) and markup in [`pricing/index.html`](pricing/index.html:102), [`reddit/index.html`](reddit/index.html:244), [`barrenotes/index.html`](barrenotes/index.html:260).
- **v3 release messaging**: v3-related pages include a visible “Coming with v3” badge to avoid confusion when publishing early while the site references the upcoming free tier and tier-gated features.
  - Badge styles: [`styles.components.css`](styles.components.css:2064)
  - Inserted on: [`pricing/index.html`](pricing/index.html:95), [`features.html`](features.html:94), [`reddit/index.html`](reddit/index.html:76), [`barrenotes/index.html`](barrenotes/index.html:76)
- **Testimonials**: cards are tappable (CSS-only modal via `:target`) and include an always-visible “Click/Tap to read more” affordance.
  - Styles: [`styles.components.css`](styles.components.css:190)
- **JavaScript is not a placeholder**: [`script.js`](script.js:1) provides progressive enhancement (parallax + mobile menu toggle). Microsoft Clarity is installed site-wide.

- **Private screenshots gallery**: [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)
  - `noindex,nofollow` meta.
  - Cards are sorted by `data-post-date` newest→oldest and laid out in two columns (fill left column first, then right).
  - Crawlers discouraged via `Disallow: /barrenotes/BarreNotesPosts/` in [`robots.txt`](robots.txt:1).

## Next Steps
- None.
