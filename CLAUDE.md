# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Chess Clock Online (chessclockonline.com) — a free, no-login, client-side chess clock/timer built with Astro (islands architecture, no UI framework — vanilla TS + `.astro` templates) and Tailwind CSS v4.

## Commands

```
npm run dev       # start dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
npm run astro ...  # run Astro CLI commands (e.g. astro check)
```

When starting the dev server as an agent, use `astro dev --background` and manage it with `astro dev stop` / `astro dev status` / `astro dev logs` rather than a blocking foreground process.

There is no test suite and no lint script configured. `tsconfig.json` extends `astro/tsconfigs/strict`; run `npm run astro check` to type-check `.astro` files.

## Deployment

Hosted on Cloudflare Pages, connected to GitHub for auto-deploy. The production branch is `main` — push/merge to `main` to deploy (not `master`).

## Architecture

### Clock engine (the core of the product)

`src/scripts/chess-clock.ts` is a single self-contained module with no external dependencies, imported directly by `src/components/ChessClock.astro` via a `<script>` tag. It has two halves:

- `ChessClockEngine` — a framework-free timer state machine driven by `requestAnimationFrame`. Tracks per-side `SideState` (remaining time, delay/bronstein bank, move count, stage-bonus flag, low-time warning flags). Exposes `start/pause/resume/press/undo/reset` and fires `onUpdate/onTurnEnd/onTimeout/onLowTime` callbacks — it has no DOM knowledge. `active` is a plain public field, not fixed to side `"a"`: `initChessClock()` tracks a `whiteOnA` flag and always points `active`/`reset(...)` at whichever side currently holds White (see `whiteSide()`), so White reliably moves first even after the pre-start swap button flips which panel is White.
- `initChessClock()` — DOM wiring: queries `data-*` attributes on the markup rendered by `ChessClock.astro`, builds preset chip buttons, binds click/keyboard handlers, and re-renders on every engine callback. Single-instance, initialized on `DOMContentLoaded` (or immediately if already loaded).

Key domain model to know before touching clock logic:
- Time control = `baseMs` + `incrementMs` + `incrementType` (`none | fischer | bronstein | delay`) + optional `stage` (`{afterMoves, bonusMs}`, the FIDE-style second time control, e.g. 90+30 after move 40).
- Fischer adds time *after* the move is completed; Bronstein/delay instead pre-load a `delayRemainingMs` bank that is drained before `remainingMs` ticks down — see `tick()` and `press()`.
- `PRESET_DEFINITIONS` is the single source of truth for built-in Bullet/Blitz/Rapid/Classical presets; category labels come from i18n, not hardcoded strings.
- User prefs (selected preset, custom time control fields, sound, rotate mode) persist to `localStorage` under `chessclockonline:prefs` — always update `persist()` when adding a new preference field. Player naming is intentionally disabled: side labels are the fixed, localized "White"/"Black" strings (`i18n.player1`/`i18n.player2`), not editable text — this was a deliberate product decision to keep move order unambiguous, not an oversight.
- `ChessClock.astro` passes translated strings into the client script via a `<script type="application/json" data-clock-i18n>` blob (`clockI18n` object), not via Astro props — the engine script runs standalone and re-parses this at init.

### i18n

Locales: `en` (default, unprefixed), `es`, `fr`, `de`, `pt`, configured in `astro.config.mjs` (`i18n.routing.prefixDefaultLocale: false`). Non-default locales live under `src/pages/<locale>/*.astro`, which are otherwise byte-for-byte duplicates of the root pages except for relative import depth (`../` vs `../../`) — when changing a page's structure, mirror the change into all four locale copies.

`src/i18n/ui.ts` holds one big `Dictionary` type and a `ui` record with a full translation per locale (no fallback merging across keys — every locale must implement the whole `Dictionary` shape). `t(locale)` looks up the dictionary; `src/i18n/utils.ts#localizedPath` builds locale-aware links. When adding new UI copy: extend `Dictionary`, then fill in the string for all five locales in `ui`, in the same locations/order for each locale block.

`Layout.astro` derives the locale-independent `currentPath` (strips the locale prefix) to generate `hreflang` alternate links for every locale plus `x-default`.

### Pages/components

Astro pages under `src/pages/` compose components from `src/components/` inside `src/layouts/Layout.astro`, which takes a `page` prop (`home | clock | timeControls | features | faq`) used to pick the right meta title/description out of the i18n dictionary. `ChessClock.astro` (the clock widget) is embedded both standalone on `clock.astro` and inline on the homepage.

### Styling

Tailwind v4 via the Vite plugin (`@tailwindcss/vite`, configured in `astro.config.mjs`), no `tailwind.config.js` — theme tokens live in `src/styles/global.css`. `DESIGN.md` is a machine-readable design-token spec (Vercel-inspired palette/typography/shadow scale) that `global.css`'s custom properties are derived from; consult it before introducing new colors, spacing, or type scale values instead of guessing new ones. Dark mode is a `.dark` class on `<html>`, toggled by an inline `<script>` in `Layout.astro` before hydration (reads `chessclockonline:theme` from localStorage) to avoid a flash of the wrong theme.
