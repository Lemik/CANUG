// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://canug.org',
  output: 'static',
  trailingSlash: 'always',
});
