import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string().default('204 Sisson Road, Harwich, MA 02645'),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    registrationUrl: z.string().url().optional(),
    isCancelled: z.boolean().default(false),
  }),
});

export const collections = {
  events: eventsCollection,
};
