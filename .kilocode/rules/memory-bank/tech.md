# Technology Stack: Cadance for Marketing Site

## Core Technologies
- HTML5: Semantic markup with accessibility features
- CSS3: Modern layout with Grid, Flexbox, and custom properties (design tokens)
- JavaScript: Not required for functionality; a placeholder file exists for progressive enhancement
- SVG/PNG: Vector logo and optimized raster screenshots

## Development Setup
- No build tools: Direct file editing and browser preview
- Local development: Any static server (e.g., Python http.server)
- Version control: Git with GitHub repository
- Deployment: GitHub Pages automatic deployment (root)

## Technical Constraints
- Static hosting only: No server-side processing, no dynamic routes
- No external dependencies: Self-contained codebase, system fonts only
- No JavaScript frameworks: Vanilla HTML/CSS; JS not referenced by pages
- GitHub Pages: Jekyll disabled via .nojekyll
- Mobile-first requirement: Works on all device sizes

## Dependencies
- None: Completely self-contained
- System fonts: No web font loading
- Local assets: All images/resources in repo root
- Native browser APIs: Standard HTML5/CSS3 features only

## Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge (latest)
- Mobile browsers: iOS Safari, Chrome Mobile, Samsung Internet
- Accessibility: Screen readers, keyboard navigation
- Progressive enhancement: Pages fully usable without JS

## Performance Characteristics
- Load time: Sub-2 second target on 3G
- Bundle size: Minimal CSS/JS (JS unused), optimized images
- Caching: Static assets with browser caching
- CDN: GitHub Pages global distribution

## Tool Usage Patterns

### Development Workflow
1. Edit HTML/CSS directly
2. Preview locally with a static server
3. Test responsive design at 320/768/1280px
4. Validate accessibility (keyboard-only and focus-visible)
5. Commit and push to GitHub for deployment

### Asset Management
- Images: PNG/SVG files in repository root
- Optimization: Compress images before commit
- Naming: Descriptive filenames (iPhone..., iPad..., cadance_)
- Alt text: Required and descriptive

### CSS Architecture
- Design tokens: CSS custom properties in :root
- Mobile-first: Base styles with breakpoints at 600px and 1024px
- Components: features-grid, feature-card, personas-grid, teaser-card, showcase-grid
- Accessibility: :focus-visible styles, prefers-reduced-motion support
- Smooth scrolling and anchor offset: CSS scroll-behavior + scroll-margin-top

### JavaScript Strategy
- Progressive enhancement only (not currently used)
- script.js retained as a placeholder, not referenced by any page
- Future enhancements must preserve full functionality with JS disabled

## Deployment Pipeline
1. Source: GitHub repository main branch
2. Build: None (static files)
3. Deploy: GitHub Pages automatic
4. Domain: Custom domain (CNAME configured externally if used)
5. SSL: GitHub Pages automatic HTTPS

## Monitoring and Analytics
- Performance: Manual checks via browser dev tools
- Accessibility: Manual checks and screen readers
- Analytics: None (privacy-first)
- Error tracking: Browser console during QA

## Security Considerations
- HTTPS via GitHub Pages
- Content security: No third-party scripts/fonts; local assets only
- Privacy: No tracking
- Contact: mailto links only (no form processing)

## Source Layout (current)
- index.html — Teacher-focused homepage
- white-label.html — Organizations and institutions
- publishers/index.html — Rights-holder permissions
- publishers.html — Meta-refresh redirect to /publishers/
- styles.css — Tokens, layout, components
- script.js — Placeholder only (not referenced)
- README.md — Documentation and maintenance guide
- .nojekyll — GitHub Pages Jekyll bypass
- Assets — PNG/SVG images in repo root