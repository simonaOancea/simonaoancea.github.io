import { z } from 'astro/zod';
import { engagementSchema, type Engagement } from './schemas';

// HOW TO ADD AN ENGAGEMENT (a delivery of a talk at an event): copy an entry,
// fill it in, save. Order does not matter — the site sorts and groups
// Upcoming vs Past by date. `date` is YOUR TALK DAY when known (the row is
// about the talk, not the conference); use date + endDate for the full event
// span while your slot is still unannounced. An engagement counts as upcoming
// through the whole of its final day. `talk` is the slug of the matching page
// in src/content/talks/ — it links the row to the talk page and lists the
// delivery there. slidesUrl/videoUrl render once the talk is past.
//
// Dates/URLs verified against the conference sites on 2026-07-24.

export const engagements: Engagement[] = z.array(engagementSchema).parse([
  {
    title: 'The Architecture Decision You Can Undo',
    conference: 'Java Forum Nord',
    conferenceUrl: 'https://javaforumnord.de/',
    city: 'Hannover',
    date: '2026-09-22',
    talk: 'modulith',
  },
  {
    title: 'The Architecture Decision You Can Undo',
    conference: 'Bit Summit',
    conferenceUrl: 'https://bit-summit.com/',
    city: 'Hamburg',
    date: '2026-09-23', // her slot, day 1 of Sep 23-24
    talk: 'modulith',
  },
  {
    title: 'The Architecture Decision You Can Undo',
    conference: 'BED-Con',
    conferenceUrl: 'https://bed-con.org/2026/',
    city: 'Berlin',
    date: '2026-09-24', // slot confirmed with the organizers, day 2 of Sep 23-24
    talk: 'modulith',
  },
  {
    title: 'The Architecture Decision You Can Undo',
    conference: 'JavaCro',
    conferenceUrl: 'https://2026.javacro.hr/',
    city: 'Rovinj',
    date: '2026-10-11', // TODO: narrow to your talk day once the schedule is out
    endDate: '2026-10-14',
    talk: 'modulith',
  },
  {
    title: 'The Architecture Decision You Can Undo',
    conference: 'W-JAX',
    conferenceUrl: 'https://jax.de/munich/',
    city: 'Munich',
    date: '2026-11-02', // TODO: narrow to your talk day once the schedule is out
    endDate: '2026-11-06',
    talk: 'modulith',
  },
]);
