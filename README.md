# Emil Soleymani Portfolio

My personal portfolio. View final product [here](https://emilsoleymani-portfolio-bucket.s3.amazonaws.com/index.html).

[![Publish Portfolio](https://github.com/EmilSoleymani/portfolio/actions/workflows/Publish.yaml/badge.svg)](https://github.com/EmilSoleymani/portfolio/actions/workflows/Publish.yaml)

[![Test & Build](https://github.com/EmilSoleymani/portfolio/actions/workflows/PRChecks.yaml/badge.svg)](https://github.com/EmilSoleymani/portfolio/actions/workflows/PRChecks.yaml)
## Design

### Tech Stack

The website is built using React for the front-end. Page content is loaded straight from `Markdown` files into `jsx` using a React plugin.

### Architecture

The website is hosted on a public S3 Bucket. Git and GitHub are used for version control. GitHub Actions is used for CI/CD by running tests, building the React application into a static website, and uploading to the S3 bucket.

## Setup

### Setting up S3

This section will cover how the S3 bucket was made, and how to set proper permissions.

1. Create an S3 bucket:

* Log in to the AWS Management Console and go to the S3 service.
* Click on "Create bucket" and enter a unique bucket name.
* Choose the AWS region for your bucket.
* Click "Next" and leave the default settings for configuration options.
* Click "Next" again and uncheck the "Block all public access" option.
* Acknowledge that the bucket will be public by clicking "Next".
* Review the settings and click "Create bucket" to create the bucket.

2. Enable static website hosting:

* Once the bucket is created, go to the bucket's properties.
* Scroll down to the "Static website hosting" section.
* Click on "Edit" and select the "Use this bucket to host a website" option.
* Enter the index document (e.g., `index.html`) and optionally provide an error document.
* Save the configuration.

3. Configure bucket policy:

* Still in the bucket properties, go to the "Permissions" tab.
* Click on "Bucket policy" and add the following policy, replacing `<your-bucket-name>` with your actual bucket name:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<your-bucket-name>/*"
        }
    ]
}
```

> Note: I setup a second [GitHub repository](https://github.com/EmilSoleymani/portfolio-markdown) where my markdown files are located. This repo also has a GitHub action that publishes to S3.

### Setting up GitHub Actions

This section will cover important notes and lessons learned while setting up the GitHub Actions workflows used to test and deploy the website.

> Note: You can view the full workflow files under `.github/workflows/`

1. Test & Build

* Create new workflow which runs on `pull_request`

```yaml
name: Workflow

on:
    - pull_request
```

* Create a new job, checkout the branch, and install `node`. (Recommend the `actions/setup-node@v3` action)

* Install dependencies before running tests or building

* For running tests, note that `npm test` might require further user input, bypass this by adding `-- --watchAll=false`

* Finally, build files into a static website

2. Publish to S3

* You probably only want this step to run on PR merges. As always with GitHub Actions, this is not as straight-forward as you would think. However, a PR merge to `main` is just a push to `main`. Furthermore, it is good practice to protect `main` branch from pushes, so the following hack also works:

```yaml
name: Publish Portfolio

on:
  push:
    branches:
      - main
```

* Unfortunately it is not easy to archive artifacts between workflows, so we will run the build again.

* It is easy to archive between jobs, so you can specify a `Build` job and `Publish` job separately, and use `actions/upload-artifact@v2` along with `actions/download-artifact@v2` to pass the build between jobs.

> Note: You will have to make sure `Publish` job only runs after `Build` job is complete using. This can be specified by `needs: Build`.

* Upload to S3 using `keithweaver/aws-s3-github-action@v1.0.0`. See [this page](https://github.com/marketplace/actions/aws-s3-github-action) for more info.