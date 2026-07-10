// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (simonaoancea.github.io) is served at the domain root — never add `base`.
export default defineConfig({
  site: 'https://simonaoancea.github.io',
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
