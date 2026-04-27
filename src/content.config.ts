import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    lang: z.enum(['en', 'fr']).default('en'),
    url: z.string().url().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    category: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string(), labelFr: z.string().optional() })),
    excerpt: z.string(),
    titleFr: z.string().optional(),
    excerptFr: z.string().optional(),
  }),
});

export const collections = { blog, cases };
