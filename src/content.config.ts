// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseFrontmatter = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  bullet: z.string().optional(),
  summary: z.string().optional(),
  primaryDescription: z.array(z.string()),
  secondaryDescription: z.array(z.string()).optional(),
  primaryImage: z.string().optional(),
  secondaryImage: z.string().optional(),
  publishedAt: z.string(),
  updatedAt: z.string(),
  endingAt: z.string().optional(),
  type: z.string().optional(),
  tags: z.array(z.string()).optional(),
  listed: z.boolean().default(false)
});

const articleFrontmatter = baseFrontmatter.extend({
  slug: z.string(),
  canonicalUrl: z.string().url().optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
      noindex: z.boolean().optional()
    })
    .optional()
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/[^_]*.{md,mdx}' }),
  schema: articleFrontmatter
});

const comps = defineCollection({
  loader: glob({ base: './src/content/comps', pattern: '**/[^_]*.{md,mdx}' }),
  schema: baseFrontmatter
});

export const collections = { articles, comps };
