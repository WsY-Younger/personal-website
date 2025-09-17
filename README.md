# Personal Website · Bilingual Portfolio (React + Vite + Tailwind)

A minimal, zero-backend bilingual portfolio site scaffolded with Vite + TypeScript + Tailwind,
bundled with lightweight shadcn-like UI primitives and lucide-react icons.

## Quick Start

```bash
# 1) Install dependencies
npm install
# 2) Run dev server
npm run dev
# 3) Build production bundle
npm run build
# 4) Preview production build
npm run preview
```

Then open the printed local URL (default http://localhost:5173).

## Where to edit your content

- `src/App.tsx` — your page content (bilingual). Update the profile, education, experience, and projects data.
- `src/components/ui/*` — lightweight UI primitives (Button, Card, Badge, Tabs, Input).
- `tailwind.config.js` — Tailwind scan paths.
- `vite.config.ts` — Path alias `@` → `src`.

## Notes

- The "Quick Contact" is a static form. Hook it to any form service if you need actual submissions.
- Imports like `@/components/ui/button` are already wired via Vite alias.