import { z } from 'astro/zod';

export const engagementSchema = z.object({
  title: z.string(),
  conference: z.string(),
  conferenceUrl: z.string().url().optional(),
  city: z.string(),
  date: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  slidesUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
  // Slug of a talk page in src/content/talks/ — links this engagement to its
  // talk-as-product page (delivery history + title link).
  talk: z.string().optional(),
});
export type Engagement = z.infer<typeof engagementSchema>;

export const workItemSchema = z.object({
  // May contain <strong> and <a class="inline-link"> — rendered as HTML.
  text: z.string(),
  // Display string like 'Mar 2026'; items render in array order.
  date: z.string().optional(),
});
export type WorkItem = z.infer<typeof workItemSchema>;

export const socialSchema = z.object({
  label: z.string(),
  // Plain string, not .url() — allows mailto: and site-relative links.
  url: z.string(),
  icon: z.enum(['github', 'linkedin', 'x', 'email', 'rss']),
});
export type Social = z.infer<typeof socialSchema>;

export const siteSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
});
export type SiteMeta = z.infer<typeof siteSchema>;
