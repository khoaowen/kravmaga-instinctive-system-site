# Website Update Runbook

Use this checklist for small, recurring KMIS website updates. Keep changes in a branch and open a PR unless the change is an urgent correction.

## Before Editing

- Check the current live site and confirm the exact page to update.
- Keep association facts centralized in `src/site.config.ts` when possible.
- Do not add forms or member data collection unless there is a clear need and a privacy review.
- Use real photos only when publication rights and consent are clear.

## Seasonal Updates

### Rentrée

- Update schedules in `src/site.config.ts`.
- Update prices in `src/site.config.ts` when confirmed.
- Add or refresh a rentrée item in `src/pages/actualites.astro`.
- Check trial-lesson wording in `src/pages/inscription-essai.astro`.

### Stage Or Event

- Add the event to `src/pages/actualites.astro`.
- Include date, location, audience, prerequisites, price if public, and contact path.
- Add one real event photo after publication if consent is clear.
- Link from the homepage only if the event is current.

### Photos

- Prefer instructor, room, class atmosphere, and event photos over logo-only visuals.
- Compress images before committing.
- Store public images under `public/images/`.
- Add or update photo metadata in `src/site.config.ts`.
- Use descriptive `alt` text: who/what, activity, city.

### Contact And Trial Lesson

- Keep WhatsApp, phone, and email in `src/site.config.ts`.
- Keep no-form contact unless there is a concrete operational need.
- After contact changes, test `tel:`, `mailto:`, and WhatsApp links in the built HTML.

## Verification

Run before PR:

```bash
npm run build
git diff --check
```

Also review changed files for secrets, private member data, unpublished pricing strategy, and accidental personal documents.

## Deployment

- PR checks must pass before merge.
- `main` deploys through the GitHub Actions Wrangler workflow when Cloudflare secrets are configured.
- Required secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
- If secrets are absent, the deploy workflow builds and skips deployment with an explicit notice.
