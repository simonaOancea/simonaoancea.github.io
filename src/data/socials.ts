import { z } from 'astro/zod';
import { socialSchema, type Social } from './schemas';

// Icons available: github, linkedin, x, email, rss — see src/components/Icon.astro.
// Order here = display order in the header.
export const socials: Social[] = z.array(socialSchema).parse([
  { label: 'GitHub', url: 'https://github.com/simonaOancea', icon: 'github' },
  // TODO: replace with your real LinkedIn URL.
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/TODO-your-handle/', icon: 'linkedin' },
  // Optional upgrade: hello@simonaoancea.com via Cloudflare Email Routing
  // (free forwarding to this Gmail) — then just swap the string here.
  { label: 'Email', url: 'mailto:simona.a.oancea@gmail.com', icon: 'email' },
  { label: 'RSS', url: '/rss.xml', icon: 'rss' },
]);
