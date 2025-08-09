# Architecture: Cadance for Publishers

## System Architecture
Static single-page website with no backend dependencies, optimized for GitHub Pages hosting.

## Source Code Structure
```
/
├── index.html              # Main HTML document with semantic structure
├── styles.css              # Mobile-first CSS with design tokens
├── script.js               # Legacy JavaScript (needs cleanup)
├── README.md               # Documentation and setup guide
├── CNAME                   # GitHub Pages custom domain config
├── .nojekyll              # GitHub Pages Jekyll bypass
└── assets/                # Brand and screenshot assets
    ├── cadance_word.svg           # Primary logo wordmark
    ├── cadance_Icon.png           # Favicon 32x32
    ├── cadance_icon_symbol.png    # Alternative favicon
    ├── cadance_app_showcase.png   # Hero and showcase image
    ├── cadance_favorites_screen.png # App screenshot
    └── cadance_tempo_control.png   # App screenshot
```

## Key Technical Decisions

### HTML Structure
- **Semantic landmarks**: `<header>`, `<main>`, `<section>`, `<footer>`
- **Accessibility-first**: Skip links, proper heading hierarchy, ARIA labels
- **Single-page layout**: All content in one document with anchor navigation
- **Performance optimized**: Proper image dimensions, lazy loading, async decoding

### CSS Architecture
- **Mobile-first responsive design**: Base styles for mobile, progressive enhancement
- **Design token system**: CSS custom properties for colors, typography, spacing
- **Fluid typography**: `clamp()` functions for responsive text scaling
- **Modern layout**: CSS Grid and Flexbox for responsive layouts
- **Accessibility**: Focus-visible styles, reduced motion support, WCAG AA contrast

### Component Relationships
```
Header (sticky)
├── Brand logo (cadance_word.svg)
└── Navigation (internal anchors)

Main Content
├── Hero Section
│   ├── Copy block (headline, subhead, CTA)
│   └── Media block (app showcase image)
├── Benefits Section (grid layout)
├── Transparency Section (text content)
├── Process Section (ordered list)
├── Showcase Section (responsive image grid)
└── Contact Section (CTA and note)

Footer
├── Brand text
└── Links (Transparency, Contact)
```

## Critical Implementation Paths

### Responsive Breakpoints
- **Base (0-599px)**: Single column, stacked layout
- **Medium (600-1023px)**: Two-column showcase grid, larger navigation
- **Large (1024px+)**: Hero becomes two-column, three-column showcase

### Performance Strategy
- **No external dependencies**: System fonts, no CDN requests
- **Optimized images**: Proper dimensions, lazy loading for non-critical
- **Minimal JavaScript**: Legacy code present but not required for functionality
- **Static hosting**: GitHub Pages with custom domain and HTTPS

### Accessibility Implementation
- **Skip navigation**: Direct link to main content
- **Keyboard navigation**: All interactive elements accessible via keyboard
- **Screen reader support**: Semantic HTML, proper alt text, ARIA labels
- **Motion sensitivity**: Respects `prefers-reduced-motion` setting
- **Color contrast**: WCAG AA compliant color combinations

## Design Patterns in Use

### CSS Patterns
- **Design tokens**: Centralized color, typography, and spacing variables
- **Fluid design**: Responsive without fixed breakpoints using `clamp()`
- **Progressive enhancement**: Works without JavaScript
- **Container queries**: Ready for future browser support

### HTML Patterns
- **Semantic structure**: Meaningful element choices for accessibility
- **Progressive enhancement**: Core functionality works without JavaScript
- **Performance optimization**: Resource hints, proper loading attributes

## Integration Points
- **GitHub Pages**: Automatic deployment from main branch
- **Custom domain**: cadance.music via CNAME configuration
- **Email integration**: mailto links for contact functionality
- **Social sharing**: Open Graph and Twitter Card meta tags