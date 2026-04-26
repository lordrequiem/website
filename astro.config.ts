import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lordrequiem.github.io',
  base: '/website',
  integrations: [mdx(), sitemap()],
});
