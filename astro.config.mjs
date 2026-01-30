import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Roberto182377.github.io',
  output: 'static',
  integrations: [tailwind()],
});
