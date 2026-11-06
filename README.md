# Kanav Arora — technical blog

A small, static-first blog built with Astro. Articles are written in Markdown, rendered to HTML during the build, and published as static files—there is no application server or database.

## Write a post

Create a Markdown file in `src/content/blog/` with this frontmatter:

```md
---
title: "A useful title"
pubDate: 2026-11-05
description: "A short summary for the archive and search previews."
tags:
  - Engineering
draft: false
---

Your article in Markdown…
```

The filename becomes the post URL, for example `my-article.md` becomes `/posts/my-article/`. Posts marked `draft: true` are excluded from the generated site. The three included posts are examples that can be edited or replaced.

## Personalize the About page

The About page is at `src/pages/about.astro`. It uses `public/profile.jpg` from the existing GitHub Pages repository; replace that file with another image to update the portrait.

## Local development

Requires Node.js 22.23.4 or later.

```sh
npm install
npm run dev
```

Build the static site into `dist/` and preview it locally:

```sh
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to the `main` branch (or run the **Deploy to GitHub Pages** workflow manually from the Actions tab).

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/`. Astro reads the GitHub repository name in Actions and automatically applies the correct base path for project pages. If the repository is named `Kanav-Arora.github.io`, it uses the root path instead.

## Project structure

```text
src/
  content/blog/       Markdown articles
  layouts/            Shared page layout and navigation
  pages/              Home page and generated post routes
  styles/             Global theme and responsive styles
public/               Static assets
.github/workflows/    GitHub Pages deployment
```
