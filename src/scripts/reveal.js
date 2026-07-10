// Scroll reveals: IntersectionObserver flips a class; all animation lives in
// CSS (global.css) behind the html.js + prefers-reduced-motion double gate.
export function initReveal() {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      let i = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // Stagger elements that enter in the same batch.
        entry.target.style.setProperty('--reveal-delay', `${i++ * 60}ms`);
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  els.forEach((el) => io.observe(el));
}
