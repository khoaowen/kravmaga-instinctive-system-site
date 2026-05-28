import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // À modifier quand le vrai domaine est acheté.
  site: 'https://kravmaga-limeil.fr',

  integrations: [sitemap()],
  output: 'static',
  adapter: cloudflare()
});