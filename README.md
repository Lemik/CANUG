# CANUG — Canadian Association of the New Ukrainian Generation

Mobile-first bilingual (English + Ukrainian, both always visible) Astro site for the Ukrainian community non-profit in Nanaimo, Canada.

**Live site:** [canug.org](https://canug.org)

## Develop locally

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## Site structure

| Path | Purpose |
|------|---------|
| `/` | Home — hero, mission, featured project, next events |
| `/about/` | Who we are / what we do |
| `/events/` | Upcoming and past events |
| `/news/` | Markdown news + Facebook page embed |
| `/projects/` | Active collections / campaigns |
| `/donate/` | Stripe Payment Link donate page |
| `/contact/` | Email and Facebook |
| `/nanaimo/` | Nanaimo community information |

## Editing content

Content lives in Markdown collections under `src/content/`:

- `src/content/news/` — news posts
- `src/content/events/` — events
- `src/content/projects/` — fundraising projects

Each file uses bilingual frontmatter (`title_en`, `title_uk`, `summary_en`, `summary_uk`, `body_en`, `body_uk`, etc.). English is shown first; Ukrainian second (stacked on mobile, side-by-side on desktop).

Site-wide settings (email, Facebook URL, Stripe link, etc.): [`src/config.ts`](src/config.ts).

### Stripe donations

1. In the [Stripe Dashboard](https://dashboard.stripe.com/), create a **Payment Link**.
2. Paste the URL into `stripePaymentLink` in `src/config.ts` (general donate button).
3. Optionally set `stripePaymentLink` on a project in `src/content/projects/` for a project-specific link.
4. Update `raised` / `goal` on project frontmatter manually when totals change (no live Stripe sync in v1).

### Facebook news feed

The News page embeds the Meta Page Plugin using `facebookPageUrl` from `src/config.ts`.

## Deploy (GitHub Pages)

Pushes to `master` run [`.github/workflows/astro-gh-pages.yml`](.github/workflows/astro-gh-pages.yml), which builds Astro and deploys `dist/`. Custom domain `canug.org` is set via `public/CNAME`.

In GitHub → Settings → Pages, use **GitHub Actions** as the source.

## Legacy Jekyll

Previous Jekyll sources are archived under `_jekyll_legacy/` and are not part of the build. Safe to delete after you no longer need them for reference.
