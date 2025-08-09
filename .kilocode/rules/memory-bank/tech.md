# Technology Stack: Cadance for Publishers

## Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern layout with Grid, Flexbox, and custom properties
- **JavaScript**: Minimal usage, legacy code present but not required
- **SVG**: Vector graphics for logos and icons

## Development Setup
- **No build tools**: Direct file editing and browser preview
- **Local development**: Python HTTP server or Node.js serve
- **Version control**: Git with GitHub repository
- **Deployment**: GitHub Pages automatic deployment

## Technical Constraints
- **Static hosting only**: No server-side processing
- **No external dependencies**: Self-contained codebase
- **No JavaScript frameworks**: Vanilla HTML/CSS/JS only
- **GitHub Pages limitations**: Jekyll disabled via .nojekyll
- **Mobile-first requirement**: Must work on all device sizes

## Dependencies
- **None**: Completely self-contained
- **System fonts**: No web font loading
- **Local assets**: All images and resources in repository
- **Native browser APIs**: Standard HTML5/CSS3 features only

## Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: Screen readers, keyboard navigation
- **Progressive enhancement**: Works without JavaScript

## Performance Characteristics
- **Load time**: Sub-2 second target on 3G
- **Bundle size**: Minimal CSS/JS, optimized images
- **Caching**: Static assets with browser caching
- **CDN**: GitHub Pages global distribution

## Tool Usage Patterns

### Development Workflow
1. Edit files directly in VS Code or text editor
2. Preview locally using Python/Node HTTP server
3. Test responsive design using browser dev tools
4. Validate HTML/CSS using browser tools
5. Commit and push to GitHub for deployment

### Asset Management
- **Images**: PNG/SVG files in repository root
- **Optimization**: Manual image compression before commit
- **Naming**: Descriptive filenames with cadance_ prefix
- **Alt text**: Required for all images in HTML

### CSS Architecture
- **Design tokens**: CSS custom properties in :root
- **Mobile-first**: Base styles for small screens
- **Progressive enhancement**: Larger screen styles in media queries
- **Utility classes**: Minimal, semantic class names

### JavaScript Strategy
- **Progressive enhancement**: Site works without JS
- **Legacy code**: Tab system remnants to be cleaned up
- **Event handling**: Standard DOM APIs
- **No frameworks**: Vanilla JavaScript only

## Deployment Pipeline
1. **Source**: GitHub repository main branch
2. **Build**: None required (static files)
3. **Deploy**: GitHub Pages automatic deployment
4. **Domain**: Custom domain via CNAME file
5. **SSL**: GitHub Pages automatic HTTPS

## Monitoring and Analytics
- **Performance**: Manual testing and browser tools
- **Accessibility**: Manual testing and screen readers
- **Analytics**: None implemented (privacy-first approach)
- **Error tracking**: Browser console monitoring

## Security Considerations
- **HTTPS**: Enforced via GitHub Pages
- **Content Security**: No external resources loaded
- **Privacy**: No tracking or analytics
- **Email**: Mailto links only, no form processing