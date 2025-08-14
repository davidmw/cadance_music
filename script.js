// Progressive enhancement: Parallax panels for Cadance marketing site
// Requirements: no external deps, works without JS, respects prefers-reduced-motion

// If loaded as a module with defer, DOM is parsed already

const mqlReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

function computeProgress(rect, vh) {
  // Normalize distance of panel center from viewport center to [-1, 1]
  const panelCenter = rect.top + rect.height / 2;
  const viewportCenter = vh / 2;
  const distance = viewportCenter - panelCenter;
  return clamp(distance / viewportCenter, -1, 1);
}

function bindPanels() {
  const nodes = document.querySelectorAll('.parallax-panel');
  const panels = [];
  nodes.forEach(el => {
    const bg = el.querySelector('.parallax-bg');
    if (!bg) return;
    panels.push({ el, bg });
  });
  return panels;
}

function initParallax() {
  try {
    if (mqlReduced.matches) return; // respect reduced motion
    const panels = bindPanels();
    if (!panels.length) return;

    let ticking = false;
    let active = true;

    function update() {
      if (!active) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = 0; i < panels.length; i++) {
        const p = panels[i];
        const rect = p.el.getBoundingClientRect();
        const progress = computeProgress(rect, vh);
        // Set CSS var on the panel element; CSS handles amplitude per breakpoint
        p.el.style.setProperty('--parallax', String(progress));
      }
    }

    function requestTick() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    }

    // Initial update
    requestTick();

    // Listeners
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);

    document.addEventListener('visibilitychange', () => {
      active = !document.hidden;
      if (active) requestTick();
    });

    // React to changes in reduced-motion without reload
    if (typeof mqlReduced.addEventListener === 'function') {
      mqlReduced.addEventListener('change', (e) => {
        if (e.matches) {
          // Turn off effect
          window.removeEventListener('scroll', requestTick);
          window.removeEventListener('resize', requestTick);
          panels.forEach(p => p.el.style.setProperty('--parallax', '0'));
        } else {
          // Re-enable
          window.addEventListener('scroll', requestTick, { passive: true });
          window.addEventListener('resize', requestTick);
          requestTick();
        }
      });
    }
  } catch (_) {
    // Fail silently to preserve no-JS baseline
  }
}

// Auto-init when module loads (defer ensures DOM is parsed)
initParallax();

// Named exports for potential future progressive enhancement usage
export { initParallax, bindPanels, computeProgress };
