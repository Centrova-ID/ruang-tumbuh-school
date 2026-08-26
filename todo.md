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
