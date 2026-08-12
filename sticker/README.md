# Studio sticker

A cross-promo link back to the studio, for dropping into each game's own
site ("check out our other games"). Deliberately not a package — just copy
whichever file matches the target repo and paste it in.

- **`StudioSticker.tsx`** — for the React + Vite game repos (dwindle,
  four-word, math-path, proving-ground, tacinar). Self-contained: no CSS
  file to also copy, no dependency beyond React itself. Loads the Jost font
  itself on mount if it isn't already on the page.
- **`studio-sticker.html`** — plain HTML/CSS/SVG for anything that isn't
  React (dictionary-corner). Same look, same behaviour, copy-paste the
  markup + `<style>` block directly.

Both export/contain two variants:

- **Full** — a bordered icon cell (the "///:" mark, same SVG as
  `public/favicon.svg`, full height) next to two lines of text: "33GHOSTS"
  as the title, "Play more games" as the subtitle. Small and quiet on
  purpose — a footer-level credit, not a CTA competing with the game's own
  buttons.
- **Mini** — just the bordered icon cell, for even tighter spaces. Has an
  `aria-label` since there's no visible text.

Both link to `https://33ghosts.surge.sh` by default. If the studio ever
gets a real domain, update `STUDIO_URL` in the `.tsx` file and the two
`href`s in the `.html` file — that's the only thing that ever needs
changing across every repo it's pasted into.
