import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vavilon-mebel.ru',
  output: 'static',
  integrations: [sitemap()],
});
