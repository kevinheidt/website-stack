// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  base: '/website-stack/',
  vite: {
      plugins: [tailwindcss()],
	},

  adapter: vercel(),
});