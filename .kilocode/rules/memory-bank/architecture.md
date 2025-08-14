# Architecture: Cadance Marketing Site

## System Architecture
Static multi-page website with no backend dependencies, optimized for GitHub Pages hosting.

## Source Code Structure
```
/
├── index.html                 # Teacher‑focused homepage
├── white-label.html           # White Label offering for orgs/institutions
├── publishers/
│   └── index.html             # Rights-holder permissions page
├── publishers.html            # Meta-refresh safety redirect → /publishers/
├── styles.css                 # Mobile‑first CSS with design tokens and components
├── script.js                  # Progressive enhancement (parallax); referenced by pages
├── README.md                  # Documentation and maintenance guide
├── CNAME                      # GitHub Pages custom domain config
├── .nojekyll                  # GitHub Pages Jekyll bypass
└── assets (repo root images)
    ├── cadance_Icon.png
    ├── cadance_word_d.svg
    ├── cadance_og_home_A.png
    ├── cadance_hero_home_final.webp
    ├── cadance_hero_*.png (MJ7 candidates)
    ├── iPhoneDetails*.PNG (UI sources)
    ├── iPhoneFav.PNG
    ├── iPhoneLibrary*.PNG
    ├── iPhoneVertLock*.PNG
    ├── iPadHorzDetails*.PNG
    └── iPadVertDetails*.PNG
```

## Key Technical Decisions

### HTML Structure
- Semantic landmarks on every page: <header>, <main>, <section>, <footer>
- Accessibility‑first: skip link to [#main](index.html:1), proper heading hierarchy, ARIA labels
- Multi‑page layout: cross‑linked pages with consistent header/footer
- Performance optimized: proper image dimensions, lazy loading for non‑hero images, async decoding

### CSS Architecture
- Mobile‑first responsive design; progressive enhancement via media queries
- Design token system: CSS custom properties for colors, typography, spacing
- Fluid typography via clamp()
- Modern layout with CSS Grid/Flexbox
- Accessibility: focus‑visible styles, reduced motion support, WCAG AA contrast
- Components: features grid, feature cards, personas grid, teaser card, shared showcase grid
- In-situ hero compositing pipeline:
  - screen-corner annotator with per‑corner radii
  - YAML-driven processor (v6) with device-space rounding and optional gloss
  - Review contact sheet at shots.html

### Component Relationships
```
Header (sticky)
├── Brand logo (cadance_word_d.svg)
└── Primary navigation:
    • Home (logo) / Features (#features on homepage)
    • White Label (white-label.html)
    • Publishers (publishers/)
    • Contact (mailto)

Home (index.html)
├── Hero (headline, subhead, CTA)
├── Features grid (cards)
├── Personas grid (who it’s for)
├── Screenshots (showcase grid)
├── White Label teaser (teaser card)
└── Contact strip (mailto CTAs)

White Label (white-label.html)
├── Hero (CTA)
├── Who it’s for (personas grid)
├── Value pillars (features grid)
├── Process (ordered list)
└── Contact (enterprise mailto)

Publishers (publishers/index.html)
├── Hero (CTA)
├── Benefits
├── Styles covered (disciplines)
├── Transparency (scope/regions/revocation)
├── Process (ordered list)
├── Showcase (images)
└── Contact (permissions mailto)

Footer (all pages)
└── Copyright only
```

## Critical Implementation Paths

### Responsive Breakpoints
- Base (0–599px): single column, stacked layout
- Medium (600–1023px): larger navigation, 2‑column showcase
- Large (1024px+): hero 2‑column, 3‑column showcase

### Performance Strategy
- No external dependencies: system fonts, no CDN requests
- Optimized images: correct dimensions; lazy load non‑hero visuals
- Minimal JavaScript: pages work without JS; [script.js](script.js:1) is a placeholder only
- Static hosting: GitHub Pages with custom domain and HTTPS

### Accessibility Implementation
- Skip navigation: visible when focused, points to main content
- Keyboard navigation: all interactive elements reachable and visible focus
- Screen reader support: semantic HTML, alt text, ARIA where applicable
- Motion sensitivity: respects prefers‑reduced‑motion
- Color contrast: WCAG AA compliant combinations

## Design Patterns in Use

### CSS Patterns
- Design tokens: centralized via :root
- Fluid design with clamp()
- Progressive enhancement without JS
- Grid/Flex layouts for cards and galleries

### HTML Patterns
- Semantic structure across pages
- Anchor navigation with scroll‑margin offsets
- Per‑page metadata for SEO/OG

## Integration Points
- GitHub Pages: automatic deployment from main
- Custom domain: cadance.music via CNAME configuration
- Email integration: mailto links for CTAs
  - Contact: info@cadance.music
- Social sharing: per‑page Open Graph and Twitter Card meta tags