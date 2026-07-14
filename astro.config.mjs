// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (canonical). simonaoancea.github.io and simonaoancea.dev
// both 301 here. Served at the domain root — never add `base`.
export default defineConfig({
  site: 'https://simonaoancea.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Two code palettes serve all six site themes; prose.css activates one
      // via [data-scheme] rules. defaultColor:false means code is INVISIBLE
      // until those rules exist — keep config and prose.css in sync.
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
