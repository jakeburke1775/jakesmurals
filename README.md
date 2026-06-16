# Jake's Murals

React + Vite site configured for GitHub Pages deployment.

## First-time setup

1. Create a GitHub repository named `jakesmurals` under your account.
2. In this project folder, add your remote:

```bash
git remote add origin https://github.com/<your-username>/jakesmurals.git
```

3. Install dependencies:

```bash
npm install
```

## Push source code to GitHub

```bash
git branch -M main
git add .
git commit -m "Initial site"
git push -u origin main
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This publishes the `dist` build to the `gh-pages` branch.

## GitHub Pages settings

In the GitHub repository:

1. Open Settings -> Pages.
2. Source: Deploy from a branch.
3. Branch: `gh-pages` and folder `/ (root)`.
4. Save.

Your site URL will be:

`https://<your-username>.github.io/jakesmurals/`
