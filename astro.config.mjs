// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// O domínio canónico também está em src/config/site.ts; manter os dois iguais.
export default defineConfig({
  site: 'https://www.fadamadrinha.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404') })],
});
