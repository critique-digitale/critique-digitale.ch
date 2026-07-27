import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		paths: {
			// Relative URLs assume directory-style routes (/de/), but adapter-static
			// writes flat files (de.html). Cloudflare Pages papered over the mismatch
			// by serving /de/ from de.html; GitHub Pages does not, which turned
			// ../downloads/... into a link above the site root. The site is served at
			// a domain root, so absolute paths are both correct and simpler.
			relative: false
		}
	},

	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
