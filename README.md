# critique-digitale.ch

## Getting started

Install [Node](https://nodejs.org/) and install all dependencies

```bash
npm install
```

To start a development server

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To change the layout see [MVP.css](https://andybrewer.github.io/mvp/). To add dynamic functionality see [SvelteKit](https://kit.svelte.dev/docs).

To check, lint, and format the code run

```bash
npm run check
npm run lint
npm run format
```

## Building

GitHub automatically deploys the dev-branch to <https://dev.critique-digitale.ch/> which takes at most 3 minutes and is powered by [Cloudflare Pages](https://pages.cloudflare.com/). If you want to build locally or preview run

```bash
npm run build

# or preview the built app
npm run preview
```

> `npm run preview` should _not_ be used to serve your app in production.

## Documentation

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [MVP.css](https://andybrewer.github.io/mvp/)
- [SvelteKit](https://kit.svelte.dev/docs)
