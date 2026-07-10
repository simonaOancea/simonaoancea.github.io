// Custom cursor: the dot tracks the pointer directly, the follower ring lerps
// after it. CSS shows these (and hides the native cursor) only for fine
// pointers with motion allowed — this module guards the same way.
export function initCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-follower');
  if (!dot || !ring) return;

  // Start off-screen until the first pointer move.
  let tx = -100;
  let ty = -100;
  let x = -100;
  let y = -100;

  addEventListener(
    'pointermove',
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    },
    { passive: true }
  );

  (function loop() {
    x += (tx - x) * 0.15;
    y += (ty - y) * 0.15;
    ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();

  const INTERACTIVE = 'a, button, .magnetic';
  document.addEventListener('pointerover', (e) => {
    if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    }
  });
  document.addEventListener('pointerout', (e) => {
    if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    }
  });
}
