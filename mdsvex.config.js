import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: '/src/lib/components/MdLayout.svelte',
	remarkPlugins: [
		remarkGfm // Adds support for GFM (fenced code blocks, strikethrough, tables, etc)
	],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank' }],
		rehypeSlug, // Adds 'id' attributes to Headings (h1,h2,etc)
		rehypeAutolinkHeadings
	]
});

export default config;
