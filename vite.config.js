import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

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
        }
    },
    resolve: {
        alias: {
            '$lib': '/src/lib',
            '$components': '/src/components',
            '$stores': '/src/lib/stores',
            '$validation': '/src/lib/validation'
        }
    }
});