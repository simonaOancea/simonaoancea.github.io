import { z } from 'astro/zod';
import { workItemSchema, type WorkItem } from './schemas';

// `text` is rendered as HTML: <strong> and <a class="inline-link" href="…">
// are the two tags to use (single-author trusted data — keep it to those by
// convention). Items render top-to-bottom in array order; `date` is an
// optional display string like 'Mar 2026'.

export const currently: WorkItem[] = z.array(workItemSchema).parse([
  // TODO: replace with what you are actually doing right now. Add or delete
  // items freely — three to five reads best.
  { text: 'TODO: the main thing you are building, e.g. leading X at <strong>Somewhere</strong>' },
  { text: 'TODO: a talk you are preparing, with a <a class="inline-link" href="https://example.com">link</a>' },
  { text: 'TODO: a side project or focus area' },
]);

export const previously: WorkItem[] = z.array(workItemSchema).parse([
  // TODO: your track record, newest first.
  { text: 'TODO: previous role — what you did at <strong>Company</strong>' },
  { text: 'TODO: the one-line version of your earlier years' },
  { text: 'TODO: degree, <strong>University</strong>' },
]);
