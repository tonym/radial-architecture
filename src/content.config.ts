// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Shared frontmatter shape for both articles and comps.
 * Matches the CompFrontmatter type you provided (string dates, optional fields, etc.).
 */
const compFrontmatterSchema = z.object({
  // Primary display title
  title: z.string(),

  // Optional secondary title or kicker
  subtitle: z.string().optional(),

  // Optional short punchy line (e.g. eyebrow text, label, callout)
  bullet: z.string().optional(),

  // Optional concise summary for dense contexts
  summary: z.string().optional(),

  // Primary descriptive paragraph (required)
  primaryDescription: z.string(),

  // Optional supporting description
  secondaryDescription: z.string().optional(),

  // Optional imagery for visual containers
  primaryImage: z.string().optional(),
  secondaryImage: z.string().optional(),

  // Temporal metadata (kept as ISO date strings per your frontmatter)
  publishedAt: z.string(),
  updatedAt: z.string(),
  endingAt: z.string().optional(),

  // Optional classification
  type: z.string().optional(),
  tags: z.array(z.string()).optional()
});

const articles = defineCollection({
  // Load markdown/mdx entries from src/content/articles
  // The [^_]* convention ignores files starting with "_" (partial/drafts, etc.)
  loader: glob({ base: './src/content/articles', pattern: '**/[^_]*.{md,mdx}' }),
  schema: compFrontmatterSchema
});

const comps = defineCollection({
  // Load markdown/mdx entries from src/content/comps
  loader: glob({ base: './src/content/comps', pattern: '**/[^_]*.{md,mdx}' }),
  schema: compFrontmatterSchema
});

export const collections = {
  articles,
  comps
};
