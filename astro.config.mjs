// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site lives at https://jeaniniarmindo.github.io/
export default defineConfig({
  site: 'https://jeaniniarmindo.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/My-Profolio') })],
});
