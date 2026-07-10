import { siteSchema } from './schemas';

export const site = siteSchema.parse({
  name: 'Simona Oancea',
  title: 'Simona Oancea',
  // TODO: one sentence for search results and link previews.
  description: 'TODO: one-sentence site description (shown in search results and link previews).',
  url: 'https://simonaoancea.github.io',
});
