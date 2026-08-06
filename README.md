# Nadya Yashchuk Portfolio

Personal site (nadzeyayashchuk.com): Astro static build with the one-page React portfolio
inside, bilingual EN + `/de/`, plus a **Dev Log** section wired to the studio panel.

Pushing to `main` triggers the Cloudflare build automatically — the site updates a few
minutes after every push.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- Main page content lives in `src/App.jsx` (both languages — see the `copy` object).
- Visual styling lives in `src/styles.css` and `src/styles-i18n.css`.
- Astro pages/layouts live in `src/pages/` and `src/layouts/`.

## Build

```bash
npm run build
```

---

## Dev Log — how it works, and what not to break

`/devlog/` (EN) and `/de/devlog/` (DE) show weekly build-in-public digests about the apps.

**The post content does NOT live in this repo.** Posts are drafted by the studio panel
(panel.lukichev.biz → «Девлог», channel “Приложения · Надя”) and, once published there,
appear on the site instantly — no rebuild, no commit. The page fetches them client-side
from a public feed:

```
https://lukichev.biz/devlog/feed-nadya.json
```

So: to change the text of a post, edit and re-publish it in the panel — not here.

### Files that belong to the Dev Log integration

| File | What it is | Safe to touch? |
|---|---|---|
| `src/components/DevlogPage.astro` | The whole Dev Log page (EN+DE strings, styles, fetch + pagination script) | Styling and wording — yes. The `FEED` URL, the `#wYYYY-MM-DD` anchor ids and the `?page=` logic — no. |
| `src/pages/devlog.astro`, `src/pages/de/devlog.astro` | Thin wrappers that render the component | Don't rename/move — the URLs are linked from the panel, social posts and hreflang. |
| `src/App.jsx` | “Dev Log” pill in the header (`.devlog-link`, in `header-tools`) + a footer link | Restyle/move — yes. Keep the hrefs `/devlog/` and `/de/devlog/`. Don't add it to the anchor nav (`navItems`) — the section-highlight logic only understands `#hash` items. |
| `src/styles-i18n.css` | `.devlog-link` pill styles | Yes. |
| `src/pages/sitemap.xml.ts` | `"/devlog/"` and `"/de/devlog/"` entries appended after the locale duplication | Keep both entries; they are outside `baseUrls` on purpose (the page has no auto-generated `/de/` twin). |

### Rules of thumb

- Renaming `/devlog/` or `/de/devlog/` breaks links in published social posts, the panel
  and search — don't.
- The German page shows a post's German version when it exists and silently falls back to
  English otherwise; both versions are edited in the panel.
- Pagination is 4 posts per page (`PER_PAGE` in `DevlogPage.astro`) — changing the number
  is safe.
- If the Dev Log ever shows “couldn't load”, the site is fine — it's the feed side
  (lukichev.biz worker); ping Ivan.
