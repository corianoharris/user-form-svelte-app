import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';


export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    },
    deps: {
      inline: ['@sveltejs/vite-plugin-svelte']
    }
  },
  resolve: {
    conditions: ['development', 'browser']
  }
});