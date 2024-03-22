# GCP Cloud Function TypeScript Template

This repository contains a template for creating Google Cloud Platform (GCP) Cloud Functions using TypeScript.

## Introduction

Google Cloud Functions is a serverless execution environment for building and connecting cloud services. This template provides a starting point for developing Cloud Functions using TypeScript, allowing you to quickly set up and deploy functions tailored to your needs.

## Features

- **TypeScript Support:** Write Cloud Functions using TypeScript for type safety and modern JavaScript features.
- **Easy Deployment:** Deploy your functions to Google Cloud Platform with ease.
- **Customizable:** Extend and modify the template to suit your specific requirements.
- **Scalable:** Utilize Google Cloud's infrastructure for scalable and reliable execution.

## Prerequisites

Before you begin, ensure you have the following:

- [Google Cloud SDK (gcloud CLI)](https://cloud.google.com/sdk/docs/install) installed and configured.
- [Yarn](https://yarnpkg.com/) installed.

## Getting Started

To install the project dependencies, run:

```bash
yarn install
```

This will install all required dependencies listed in the package.json file.

## Available Scripts

### To build the project using TypeScript, run:

```bash
yarn build
```

### To start the project locally, run:

```bash
yarn start
```

This will run the function locally on localhost:8080.

### To run tests, execute:

```bash
yarn test
```

This runs tests using Jest.

### To deploy the project to GCP, use:

```bash
yarn deploy
```

This command deploys the function to Google Cloud Functions. Ensure you replace correctly set your environment variables for this to succeed.
