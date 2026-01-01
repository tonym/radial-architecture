// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default {
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'one-light'
    }
  }
};
