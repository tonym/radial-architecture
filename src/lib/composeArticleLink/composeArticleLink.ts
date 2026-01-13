/**
 * Compose a canonical article URL from a validated slug.
 */
export function composeArticleLink(slug: string): string {
  const path = slug.trim();
  return `/articles/${path}`;
}
