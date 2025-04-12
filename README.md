# Workflow repo for the CA

Workflow project for enhancing the development workflow of a website using various tools like Vitest, Playwright, ESLint and Prettier.

## Description

This project is a course assignment for improving the development workflow by using various tools like Vitest, Playwright, ESLint and Prettier to automate processes and test functions. The key aspects of the project includes:

- Installing and setting up ESLint and Prettier for linting and formatting.
- Installing Husky pre-commit hooks.
- Installing and setting up unit testing with Vitest.
- Installing and setting up end-to-end testing with Playwright.

## Built with

- HTML
- JavaScript
- Tailwind CSS
- ESLint
- Prettier
- Vitest
- Playwright

## Getting started

### Installing

To get started with this project, follow these steps:

1. Clone the repo:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/workflow-repo-ca.git
```

2. Install dependencies:

```bash
npm install
```

### Running

To start the development server:

```bash
npm start
```

To run Tailwind CSS in watch mode:

```bash
npm run dev
```

To run Tailwind CSS for production:

```bash
npm run build
```

## Testing

### Unit tests

Vitest is used for unit testing. Run tests with:

```bash
npm run test:unit
```

### End-to-end (E2E) tests

Playwright is used for E2E testing. Run tests with:

```bash
npm run test:e2e
```

## Environment variables

Be sure to have a .env file with the required environment variables. Example:

```bash
TEST_USER_EMAIL=your_test_user_email_here
TEST_USER_PASSWORD=your_test_user_password_here
```

The .env file is ignored in version control. Use .env.example as reference.
