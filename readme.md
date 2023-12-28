# k6 GitHub Actions Example

This project demonstrates how to use [k6](https://k6.io/), an open-source load testing tool, with GitHub Actions for continuous performance testing. The setup allows you to easily integrate performance testing into your CI/CD pipeline.

## Prerequisites

Before using this project, ensure you have the following:

- [k6](https://k6.io/docs/getting-started/installation/)
- A GitHub repository where you want to integrate performance testing.

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/maxoliverbr/k6GithubActions.git
    ```

2. Navigate to the project directory:

    ```bash
    cd k6GithubActions
    ```

3. Customize your k6 test script in the `scripts` directory. You can use the provided `example.js` as a starting point.

4. Update the GitHub Actions workflow configuration in `.github/workflows/k6.yml` as needed, specifying your test script and other parameters.

## Running Locally

To run the k6 test locally, use the following command:

```bash
k6 run scripts/example.js
