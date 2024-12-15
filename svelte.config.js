import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess({
            postcss: {
                plugins: [
                    tailwindcss(),
                    autoprefixer()
                ]
            }
        })
    ],
    kit: {
        adapter: adapter(),
        alias: {
            '$lib': 'src/lib',
            '$components': 'src/components',
            '$stores': 'src/lib/stores',
            '$validation': 'src/lib/validation'
        }
    }
};

export default config;