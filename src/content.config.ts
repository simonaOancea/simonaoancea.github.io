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

// Talks-as-products: one page per bookable talk in src/content/talks/.
// Filename = URL slug (modulith.md -> /talks/modulith/) — keep slugs short,
// they go on the last slide. Engagements (src/data/engagements.ts) link back
// here via their `talk` field.
const talks = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    hook: z.string(), // one-liner shown under the title in lists
    audience: z.string(),
    duration: z.string(),
    language: z.string().default('English'),
    deckUrl: z.string().url().optional(), // current public slide deck
    order: z.number().default(999), // homepage/index sort order
    draft: z.boolean().default(false), // visible in dev, excluded from builds
  }),
});

export const collections = { writing, talks };
