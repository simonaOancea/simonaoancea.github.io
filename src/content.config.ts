import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles live in src/content/writing/ as .md files. Filenames become URLs:
// my-post.md -> /writing/my-post/. Files starting with _ are ignored.
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 'YYYY-MM-DD'
    description: z.string(), // shown in lists, meta description, RSS
    externalUrl: z.string().url().optional(), // set => link-only entry, no page generated
    draft: z.boolean().default(false), // true => visible in dev, excluded from the built site
  }),
});

export const collections = { writing };
