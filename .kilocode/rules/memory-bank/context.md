# Current Context: Cadance Marketing Site

## Current State
The site has been restructured from a single rights-holder page into a multi-page marketing site:
- Teacher-focused homepage at [index.html](index.html)
- Publishers rights-holder page at [publishers/index.html](publishers/index.html)
- White Label offering at [white-label.html](white-label.html)
- Safety redirect at [publishers.html](publishers.html) → /publishers/

Design system extended in [styles.css](styles.css) with feature cards, personas grid, and teaser card components. Legacy JavaScript was removed from page usage; [script.js](script.js) now contains only a placeholder header and is not referenced.

## Recent Changes
- New teacher-first homepage with:
  - Hero, Features grid, Personas, Screenshot gallery, White Label teaser, Contact strip
- Migrated original rights-holder content into /publishers/ preserving structure and improving OG meta image
- Added a dedicated White Label page with value pillars and an enterprise CTA
- Updated global header and footer links across pages
- Extended CSS tokens/components and kept WCAG AA, smooth scrolling, reduced motion support
- Updated repository documentation in [README.md](README.md)

## Next Steps
- QA:
  - Keyboard-only navigation and focus-visible states
  - Responsive checks at 320/768/1280px (no horizontal scroll)
  - Reduced motion behavior
  - Validate OG/Twitter meta images for each page
- Deployment:
  - Commit and push to main
  - Verify GitHub Pages build + HTTPS on cadance.music
- Future enhancements:
  - Replace waitlist mailto with App Store / Google Play links when available
  - Optional JSON-LD structured data (Organization/App)
  - Optional analytics (privacy-first) after policy review
  - Consider Press/Privacy pages when needed

## Technical Status
- Static, GitHub Pages-compatible, no frameworks or external dependencies
- Pages function without JavaScript; progressive enhancement reserved
- All images sized; non-hero images lazy-loaded; no external fonts