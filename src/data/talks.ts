import { z } from 'astro/zod';
import { talkSchema, type Talk } from './schemas';

// HOW TO ADD A TALK: copy the template below into the array, fill it in, save.
// Order does not matter — the site sorts and groups Upcoming vs Past by date.
// A talk counts as upcoming through the whole of its final day (use endDate
// for multi-day conferences).
//
// {
//   title: 'Talk title',
//   conference: 'Conference name',
//   conferenceUrl: 'https://…',   // optional: conference or session page
//   city: 'City',
//   date: '2026-09-22',           // day of the talk (YYYY-MM-DD)
//   endDate: '2026-09-24',        // optional: last day of a multi-day event
//   slidesUrl: 'https://…',       // optional: shown once the talk is past
//   videoUrl: 'https://…',        // optional: shown once the talk is past
// },

export const talks: Talk[] = z.array(talkSchema).parse([
  // TODO: your confirmed 2026 talks — uncomment and VERIFY every field
  // (dates, URLs, cities) before publishing.
  //
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'Java Forum Nord',
  //   conferenceUrl: 'https://javaforumnord.de/', // TODO verify
  //   city: 'Hannover',
  //   date: '2026-09-22', // TODO verify
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'Bit Summit', // TODO verify name, URL and city
  //   city: 'TODO',
  //   date: '2026-09-23', // TODO verify
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'BED-Con', // TODO verify
  //   conferenceUrl: 'https://bed-con.org/', // TODO verify
  //   city: 'Berlin',
  //   date: '2026-09-24', // TODO verify
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'W-JAX', // TODO verify
  //   conferenceUrl: 'https://jax.de/', // TODO verify
  //   city: 'Munich',
  //   date: '2026-11-09',    // TODO exact dates
  //   endDate: '2026-11-13', // TODO exact dates
  // },
]);
