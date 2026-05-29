import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kmis-kravmaga.fr',
  integrations: [sitemap()],
  output: 'static'
});
