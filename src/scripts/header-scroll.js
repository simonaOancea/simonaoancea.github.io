// Gives the fixed header a blurred backdrop once the page scrolls (the
// backdrop itself only renders on mobile widths — see global.css).
export function initHeaderScroll() {
  const header = document.querySelector('.social-header');
  if (!header) return;

  const update = () => header.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', update, { passive: true });
  update();
}
