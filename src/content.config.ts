/*
 * Astro 6 Content Collections for the Startovací Hub.
 * Three collections: subProjects (Hub programme cards), faq, org (OSA identity).
 */
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const subProjectStatusEnum = z.enum(['v-priprave', 'realizujeme']);

const subProjects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/sub_projects' }),
  schema: z.object({
    name: z.string().min(3).max(80),
    role: z.string().min(20).max(160),
    status: subProjectStatusEnum,
    order: z.number().int(),
    thumbnail: z.string().startsWith('/').optional(),
  }),
});

const faqAudienceEnum = z.enum(['project', 'resident']);

const faq = defineCollection({
  loader: file('./src/content/faq/index.json'),
  schema: z.object({
    audience: faqAudienceEnum,
    question: z.string().min(8).max(200),
    answer: z.string().min(40).max(1200),
    order: z.number().int(),
  }),
});

const org = defineCollection({
  loader: file('./src/content/org/identity.json'),
  schema: z.object({
    name: z.string(),
    abbreviations: z.array(z.string()),
    ico: z.string(),
    dic: z.string(),
    datova_schranka: z.string(),
    spisova_znacka: z.string(),
    founded: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    seat_address: z.string(),
    office_address: z.string(),
    email: z.string().email(),
    phone: z.string(),
    bank_transparent: z.string(),
    bank_other: z.string(),
    predseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
    mistopredseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
  }),
});

export const collections = { subProjects, faq, org };
