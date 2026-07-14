import { z } from 'astro/zod';
import { engagementSchema, type Engagement } from './schemas';

// HOW TO ADD AN ENGAGEMENT (a delivery of a talk at an event): copy the
// template below into the array, fill it in, save. Order does not matter —
// the site sorts and groups Upcoming vs Past by date. An engagement counts as
// upcoming through the whole of its final day (use endDate for multi-day
// conferences). `talk` is the slug of the matching page in src/content/talks/
// — it links the row to the talk page and lists the delivery there.
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
//   talk: 'modulith',             // optional: slug in src/content/talks/
// },

export const engagements: Engagement[] = z.array(engagementSchema).parse([
  // TODO: your confirmed 2026 talks — uncomment and VERIFY every field
  // (dates, URLs, cities) before publishing.
  //
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'Java Forum Nord',
  //   conferenceUrl: 'https://javaforumnord.de/', // TODO verify
  //   city: 'Hannover',
  //   date: '2026-09-22', // TODO verify
  //   talk: 'modulith',
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'Bit Summit', // TODO verify name, URL and city
  //   city: 'TODO',
  //   date: '2026-09-23', // TODO verify
  //   talk: 'modulith',
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'BED-Con', // TODO verify
  //   conferenceUrl: 'https://bed-con.org/', // TODO verify
  //   city: 'Berlin',
  //   date: '2026-09-24', // TODO verify
  //   talk: 'modulith',
  // },
  // {
  //   title: 'The Architecture Decision You Can Undo',
  //   conference: 'W-JAX', // TODO verify
  //   conferenceUrl: 'https://jax.de/', // TODO verify
  //   city: 'Munich',
  //   date: '2026-11-09',    // TODO exact dates
  //   endDate: '2026-11-13', // TODO exact dates
  //   talk: 'modulith',
  // },
]);
