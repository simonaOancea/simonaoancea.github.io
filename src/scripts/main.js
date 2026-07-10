// Bundled entry point (see Layout.astro). Every module self-guards and
// no-ops when its preconditions (fine pointer, motion allowed) fail.
import { initReveal } from './reveal.js';
import { initMagnetic } from './magnetic.js';
import { initCursor } from './cursor.js';
import { initHeaderScroll } from './header-scroll.js';

initReveal();
initMagnetic();
initCursor();
initHeaderScroll();
