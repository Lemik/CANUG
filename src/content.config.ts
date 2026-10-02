import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bilingualText = {
  title_en: z.string(),
  title_uk: z.string(),
  summary_en: z.string(),
  summary_uk: z.string(),
};

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    ...bilingualText,
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    venue_en: z.string().optional(),
    venue_uk: z.string().optional(),
    image: z.string().optional(),
    facebook_url: z.string().url().optional(),
    body_en: z.string(),
    body_uk: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    ...bilingualText,
    date: z.coerce.date(),
    image: z.string().optional(),
    facebook_url: z.string().url().optional(),
    body_en: z.string(),
    body_uk: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    ...bilingualText,
    status: z.enum(['active', 'completed']),
    goal: z.number().optional(),
    raised: z.number().optional(),
    currency: z.string().default('CAD'),
    stripePaymentLink: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    body_en: z.string(),
    body_uk: z.string(),
  }),
});

export const collections = { events, news, projects };
