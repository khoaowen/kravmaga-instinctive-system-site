import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // À modifier quand le vrai domaine est acheté.
  site: 'https://kravmaga-limeil.fr',
  integrations: [sitemap()],
  output: 'static'
});
