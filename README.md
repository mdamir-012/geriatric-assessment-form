# Geriatric Care Assessment

A one-page assessment form for a visiting nurse to enter geriatric care assessment details.

Built with:

* React
* TypeScript
* Mantine
* Zod

## Run locally

```bash
corepack yarn install
corepack yarn dev
```

Open the local URL shown by Vite.

## Run tests and build

```bash
corepack yarn test
```

This runs the configured typecheck, lint, formatting check, tests, and production build.

## Features

* 10 assessment fields
* Validation using the provided Zod schema
* Cross-field validation for age, follow-up date, and medication review
* Validation on blur and submit
* Sample patient data button
* Simulated save with loading state
* Shows the parsed values after a successful save
* Tests for schema validation and form submission

## Sample data

The application uses made-up sample patient data only.

No real patient information is used.

## Deployment

Deployed application:

https://mdamir-012.github.io/geriatric-assessment-form/

The application is deployed using GitHub Pages through GitHub Actions.

## Scope

This assignment does not include a backend, authentication, or persistent storage. The save action is simulated in the browser.

For a real application, the next step would be connecting the form to a backend API and adding the required authentication and data protection.

## Time spent

Approximately 1 hour 30 minutes.

## Notes

The validation rules are kept in the provided Zod schema and the form uses the schema resolver for validation.

The project was kept within the scope of the assignment and no real patient data was used.
