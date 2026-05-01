# reading-list
The site is available at [https://reading-list.korren.org/](https://reading-list.korren.org/)

List of stuff I read.

This repository contains a SvelteKit application that renders a reading list from a collection of YAML files.

## Prerequisites
- **Node.js**: >= 24.15.0 (managed by [mise](https://mise.jdx.dev/))
- **npm**: Included with Node.js

## Data
The reading list data is stored as YAML files in the `data/` directory. The data is validated against a JSON schema (`data/schema.json`) using Ajv. You can run the validation script using `./bin/validate.js`.

## Tech Stack
* [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
* [Sass](https://sass-lang.com/)
* [Vitest](https://vitest.dev/) for testing

## Development
To run the development server:
```bash
npm install
npm run dev
```

To run the tests:
```bash
npm run test
```

## Deployment
See [CLOUDFLARE.md](CLOUDFLARE.md) for details on how this project is deployed to Cloudflare Workers.
