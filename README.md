# 33ghosts

A game studio's landing page and internal dashboard: a list of games and
prototypes, each tagged with how real it actually is, so it's easy to see
what's live, what's cooking, and what's still just an idea.

Not public yet — `public/robots.txt` disallows crawling until it's ready.

## Stack

React 19 + TypeScript, built with Vite. Routing via `react-router-dom`. No
backend — the games list is a hardcoded TypeScript file, and Contact is an
embedded Google Form. Plain CSS per component, no framework.

## Getting started

```bash
npm install
npm run dev       # dev server with HMR
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

## Project structure

```
src/
  App.tsx              route table
  main.tsx             entry point, wraps App in BrowserRouter
  index.css            design tokens (colours, fonts) + global styles
  components/
    Header.tsx/.css     nav bar: desktop row / mobile drawer
  pages/
    Home.tsx/.css        the games grid ("/")
    About.tsx/.css       studio blurb ("/about")
    Contact.tsx/.css     embedded feedback form ("/contact")
  data/
    games.ts             the actual list of games + status labels
    consts.ts             external links (Ko-fi, the contact form URL)
```

## Adding or updating a game

Edit the `games` array in `src/data/games.ts`. Each entry is:

```ts
{
  id: 'my-game',
  name: 'My Game',
  subtitle: 'One line describing it',
  url: 'https://example.com',   // or null if there's nothing to link to yet
  status: 'prototype',
}
```

`status` is one of `concept`, `prototype`, `in-development`,
`awaiting-launch`, or `live` — this drives both the label and the little
five-step progress indicator on each card. No `url` renders the card as
non-interactive instead of a link.
