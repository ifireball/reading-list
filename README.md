# reading-list
List of stuff I read.

[View the reading list here](https://ifireball.github.io/reading-list/)

This repository contains a Next.js application that renders a reading list from a collection of YAML files.

## Data
The reading list data is stored as YAML files in the `data/` directory. The data is validated against a JSON schema (`data/schema.json`) using Ajv. You can run the validation script using `./bin/validate.js`.

## Tech Stack
* Next.js
* React
* Sass
* Vitest for testing

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
