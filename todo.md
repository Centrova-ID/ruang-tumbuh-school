# MPA conversion checklist

- [x] Audit current SPA router and Vite entry configuration.
- [x] Replace client-side route switching with a shared page renderer and independent HTML entry files.
- [x] Update all internal links to direct `.html` page URLs.
- [x] Configure Vite for multiple HTML inputs and preserve asset paths.
- [x] Run typecheck/build and verify representative direct URLs on desktop and mobile.
- [ ] Save a checkpoint and deliver the MPA version.

## AOS content-only animation update

- [x] Install and initialize AOS.js once from the shared React bootstrap.
- [x] Add AOS attributes to content elements only, excluding sections and card wrappers.
- [x] Add reduced-motion and non-layout-shifting AOS styles.
- [x] Verify representative MPA pages and run the production build.
- [ ] Save a checkpoint and deliver the animation update.

## Story detail page

- [ ] Add a dedicated story-detail renderer and direct HTML entry.
- [ ] Connect the existing “Baca cerita” teaser to the article page.
- [ ] Add article content, metadata, imagery, navigation, and responsive styling.
- [ ] Verify the new MPA page and save a checkpoint.

## Clean MPA URLs

- [ ] Move each page entry into a directory index.html structure.
- [ ] Update all internal links and active-navigation checks to clean paths.
- [ ] Update Vite multi-page inputs and verify direct clean URLs.
- [ ] Save a checkpoint after the clean URL build passes.

## SEO and indexing

- [ ] Add unique title, description, canonical, Open Graph, Twitter Card, and JSON-LD metadata per page.
- [ ] Add natural Centrova portfolio positioning to relevant metadata and visible supporting copy.
- [ ] Add image alt text, image metadata, and a sitemap image namespace.
- [ ] Add robots.txt, sitemap.xml, and a social preview asset reference.
- [ ] Verify SEO files, direct pages, and production build.
- [ ] Save a checkpoint and deliver the indexing checklist.

## Performance optimization

- [ ] Audit bundle, font, image, and analytics loading costs.
- [ ] Add responsive image loading, lazy loading, and fetch priorities.
- [ ] Optimize JavaScript and font loading without changing the visual system.
- [ ] Verify production build and representative page loading.
- [ ] Save a performance checkpoint.

## Deploy-safe assets and favicon

- [ ] Consolidate the optimized WebP assets into one managed asset set.
- [ ] Create and install favicon.ico plus modern favicon references.
- [ ] Replace hardcoded old asset references in the app, metadata, and sitemap.
- [ ] Verify all image paths and production output before checkpoint.

## ImgBB asset migration

- [ ] Upload the consolidated WebP image assets to ImgBB without exposing the API key.
- [ ] Replace app image URLs with ImgBB direct image URLs.
- [ ] Update SEO metadata and sitemap image URLs.
- [ ] Verify remote image loading, favicon, and production build.
- [ ] Save a checkpoint after successful migration.

## Image loading recovery

- [ ] Confirm the ImgBB TLS failure and test supported alternate delivery hosts.
- [ ] Implement a reliable fallback that does not depend on the failing host.
- [ ] Update frontend, SEO metadata, and sitemap references.
- [ ] Verify every visual asset in the browser and production build.
- [ ] Save a recovery checkpoint.

## GitHub Raw assets

- [ ] Identify the connected repository and current branch.
- [ ] Add optimized WebP assets under a stable repository asset folder.
- [ ] Update app, SEO metadata, and sitemap image URLs to GitHub Raw.
- [ ] Verify Raw URLs, browser rendering, and production build.
- [ ] Save a checkpoint after the migration.

## Vercel self-deployment

- [ ] Add vercel.json for the static MPA and clean directory URLs.
- [ ] Validate the configuration and production build.
- [ ] Save a checkpoint with self-deployment instructions.
