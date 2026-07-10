import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET(context) {
  const posts = (await getCollection('writing', (e) => !e.data.draft)).sort(
    (a, b) => +b.data.date - +a.data.date
  );

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // External entries point straight at the canonical article.
      link: post.data.externalUrl ?? `/writing/${post.id}/`,
    })),
    customData: '<language>en</language>',
  });
}
