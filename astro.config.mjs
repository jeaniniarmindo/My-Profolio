// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site lives at https://jeaniniarmindo.github.io/My-Profolio/
// If the GitHub repository is ever renamed to "jeaniniarmindo.github.io",
// change `base` to '/' and the site will live at the root address instead.
export default defineConfig({
  site: 'https://jeaniniarmindo.github.io',
  base: '/My-Profolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
