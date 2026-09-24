// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical domain lives in src/config/site.ts; keep the two in sync.
export default defineConfig({
  site: 'https://www.fadamadrinha.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // /quem-somos/index.html → servido pela Netlify como /quem-somos
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt-AO', locales: { 'pt-AO': 'pt-AO' } },
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
  image: {
    // sharp is installed; AVIF/WebP generated at build time by <Picture>.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
