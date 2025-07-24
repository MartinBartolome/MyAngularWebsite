# GitHub Pages Setup Instructions

To enable automated deployment to GitHub Pages with the new workflow, follow these steps:

## 1. Repository Settings

1. Go to your repository on GitHub: `https://github.com/MartinBartolome/MyAngularWebsite`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

## 2. Configure GitHub Pages Source

1. Under **Source**, select **GitHub Actions** instead of "Deploy from a branch"
2. This will enable the automated deployment workflow

## 3. How it Works

- The workflow is triggered automatically when you push changes to the `main` branch
- It can also be triggered manually from the **Actions** tab
- The workflow will:
  - Install Node.js and dependencies
  - Build the Angular application using `npm run build:github-pages`
  - Deploy the built files to GitHub Pages

## 4. Manual Trigger

You can also manually trigger the deployment:
1. Go to the **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**

Your website will be available at: `https://martinbartolome.github.io/MyAngularWebsite/`