import { describe, it, expect } from 'vitest';
import { composeArticleLink } from './composeArticleLink';

describe('composeArticleLink', () => {
  it('composes an article link from a slug', () => {
    expect(composeArticleLink('radial-architecture')).toBe('/articles/radial-architecture');
  });

  it('trims surrounding whitespace from the slug', () => {
    expect(composeArticleLink('  radial-architecture  ')).toBe('/articles/radial-architecture');
  });
});
