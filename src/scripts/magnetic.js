// Magnetic hover: elements with .magnetic lean toward the pointer, scaled by
// data-strength (percent of the pointer offset). Desktop-only, motion-allowed only.
export function initMagnetic() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.magnetic').forEach((el) => {
    const strength = Number(el.dataset.strength || 20);
    let raf = 0;

    el.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${(x * strength) / 100}px, ${(y * strength) / 100}px)`;
      });
    });

    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    });
  });
}
