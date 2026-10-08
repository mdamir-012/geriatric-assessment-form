# Geriatric Care Assessment

A one-page assessment form for a visiting nurse, built with React, TypeScript, Mantine, and Zod. The form uses the supplied Zod schema for field and cross-field validation; it uses invented sample data only.

## Run locally

```sh
corepack yarn install
corepack yarn dev
```

Open the local URL printed by Vite. To run the checks, tests, and production build:

```sh
corepack yarn test
```

## Included

- Ten assessment fields with validation on blur and submit.
- A sample patient button and a simulated save with parsed values.
- Schema boundary and rendered form tests.

## Deployment

The app is configured for GitHub Pages at <https://mdamir-012.github.io/geriatric-assessment-form/>. Deployment runs from the `main` branch through GitHub Actions. The repository's Pages source must be set to **GitHub Actions**.

## Scope and follow-up

There is no backend or persistent storage; saving is simulated in the browser. Follow-up work would connect a suitable API and add the authentication and data-handling protections required for real patient information. Do not use real patient data in this demo.

Time spent: **Approximately 1 hour** based on the work recorded in this session. Adjust this to your actual total before submitting if you spent additional time outside this session.
