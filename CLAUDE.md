# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (flat config, eslint-config-next/core-web-vitals + typescript)
npm run start    # serve production build
```

No test runner is configured.

## Architecture

Single-page landing site: **Next.js 16 App Router** + **React 19** + **TypeScript** + **Tailwind CSS v4**.

```
app/
  layout.tsx          # Root layout — fonts, metadata, <html lang="es">
  page.tsx            # Composes all sections in order
  globals.css         # Entire design system (tokens, resets, all component classes)
  components/
    Nav.tsx           # 'use client' — scroll state + mobile menu
    Hero.tsx          # 'use client' — particle animation (useMemo)
    Contact.tsx       # 'use client' — form state and validation
    AnimationInit.tsx # 'use client' — dual IntersectionObserver (reveal + active nav)
    FloatingCTA.tsx   # 'use client' — scroll-triggered mobile FAB
    A11yBar.tsx       # 'use client' — font-size / contrast / motion prefs via localStorage
    * (rest)          # Server components
```

## CSS System — Critical

**Do not use Tailwind utility classes in components.** All styling goes through named classes in `globals.css`. Tailwind v4 is present only for its reset/base layer (`@import "tailwindcss"` at the top of `globals.css`).

Design tokens live in `:root` as CSS custom properties:
- Colors: `--navy` `--navy-2` `--navy-3` `--cream` `--cream-dim` `--mint` `--accent`
- Layout: `--pad` (fluid, clamp 20px–56px) `--maxw` (1280px)
- Transitions: `--t-fast` `--t-med`
- High-contrast override: `html[data-contrast="high"]`
- Reduced motion: `html[data-motion="reduce"]` (set by A11yBar) + native `prefers-reduced-motion`

Typography classes: `.h-display` `.h-section` `.h-card` `.lede` `.mono` `.eyebrow`  
Button classes: `.btn .btn-primary .btn-ghost .btn-link`  
Scroll reveal: add `reveal-section` class to a `<section>` — `AnimationInit` adds `.revealed` on intersection.

## React 19 / Next.js 16 Patterns

- **Fonts:** `next/font` does not support Fontshare. Fonts are loaded via `<link>` tags inside `<body>` in `layout.tsx` — React 19 hoists them to `<head>` automatically.
- **Client components:** Only add `"use client"` when the component uses browser APIs, hooks, or event handlers. Everything else is a Server Component by default.

## Breakpoints

| Token | Value |
|---|---|
| form-row | 600px |
| nav-collapse / testimonials-2col | 720px |
| desktop / nav-full | 920px |
| testimonials-4col | 1100px |
