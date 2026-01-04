# Studygram (Next.js + Tailwind CSS v4)

Studygram is now powered by Next.js 15 with the CSS-first Tailwind CSS v4 pipeline. The app renders the same analog note-kit experience (dot-grid, sticky notes, hand-card, marker highlights) while leveraging the Next.js `app/` router, server components, and Vercel Analytics.

## Getting started

```bash
bun install
bun run dev
```

- `bun run dev` → starts the Next dev server on http://localhost:3000
- `bun run build` → compiles for production, generating `.next`
- `bun run start` → runs the production build (`next start`)
- `bun run lint` → runs `next lint` (still warns if the built-in Next plugin isn't enabled)

## Key configurations

| Layer | Details |
| --- | --- |
| Routing | Next.js `app/page.tsx` contains the Studygram layout + interactive palette cards. |
| Styling | `app/globals.css` imports `tailwindcss` v4 and keeps the Studygram helpers (`.sticky-note`, `.hand-card`, `.dot-grid`, `highlight` classes). |
| Tailwind config | `tailwind.config.ts` points to `app`, `components`, and `lib` so that class names stay detectable. |
| ESLint | `eslint.config.js` combines `@eslint/js`, `typescript-eslint`, and `react-hooks` rules. `next lint` is used for validation even though the Next plugin is omitted for now. |

## Studygram assets

- Hero photo: `public/assets/studygram-hero.jpg`
- Prompt helpers: `lib/prompt.ts`
- Handcrafted components stay in `app/page.tsx` so you can add more sections quickly.
