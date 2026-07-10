import { z } from 'astro/zod';

export const talkSchema = z.object({
  title: z.string(),
  conference: z.string(),
  conferenceUrl: z.string().url().optional(),
  city: z.string(),
  date: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  slidesUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
});
export type Talk = z.infer<typeof talkSchema>;

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
