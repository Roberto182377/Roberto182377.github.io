import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Roberto182377.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});
