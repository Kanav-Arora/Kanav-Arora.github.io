---
title: "Why Markdown makes a good source for a small blog"
pubDate: 2026-09-04
description: "A lightweight publishing workflow: keep the writing portable, generate pages at build time, and ship only static files."
tags:
  - Web
  - Markdown
---

For a personal technical blog, publishing can be much simpler than running a content-management server. Store each article as a Markdown file, turn those files into pages during a build, and publish the resulting HTML, CSS, and assets.

The important distinction is when the work happens. The Markdown is processed before deployment, not when a reader opens a page. Visitors receive ordinary static files, so there is no application server or database to maintain.

## Keep the source portable

Markdown is readable without special software and works well with version control. A post can sit beside its history, be reviewed like a code change, and move to another generator later if the site ever needs to change.

Frontmatter holds the small amount of structured information a listing needs:

```yaml
title: "A useful article title"
pubDate: 2026-09-04
description: "A short summary for the archive and search previews."
tags:
  - Web
```

The body stays focused on the article itself. The build reads the metadata to create the archive and uses the Markdown body for the individual page.

## A build-time publishing pipeline

The flow is easy to understand:

1. Write a Markdown file and commit it.
2. The static-site generator validates its metadata and renders pages.
3. A hosting service publishes the generated directory.

Because routes are generated ahead of time, every article can be fast, cacheable, and available without a server-side request. The trade-off is that changes appear after the next build, which is exactly what a personal blog usually needs.

## The useful constraint

A static-first setup intentionally leaves out features such as server-side comments or accounts. That constraint can be an advantage: fewer moving parts, fewer dependencies, and a writing workflow that stays close to the files you already edit.

Start with the smallest system that makes publishing comfortable. Add more only when a real need shows up.