// 33ghosts cross-promo sticker -- a self-contained, copy-paste component.
// No shared package, no external CSS file: just drop this file into any
// React + Vite project's src/components/ and use it directly.
//
// This is a footer-level addendum, not a CTA -- it should read as a small,
// quiet credit line, not compete with the game's own buttons.
//
//   <StudioSticker />       bordered icon cell + "33ghosts" / CTA subtitle
//   <StudioStickerMini />   the bordered icon cell alone, for tight spaces
//
// Update STUDIO_URL below if the studio ever moves off the surge.sh preview
// domain onto a real one.

import { useEffect } from 'react'

const STUDIO_URL = 'https://33ghosts.surge.sh'
const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Jost:wght@600;700&display=swap'

// Loads the Jost font on demand so the sticker looks right even in a repo
// that has never heard of it. Guards against adding the <link> twice if
// both variants are rendered on the same page.
function useJostFont() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONT_HREF
    document.head.appendChild(link)
  }, [])
}

// Matches public/favicon.svg on the studio site -- keep these in sync.
// overflow: visible matters here: a favicon resource isn't clipped by the
// host page's CSS, but this same markup rendered inline in the page *is*
// clipped at the viewBox edge by default, and the glyph's real ink extends
// past it.
function Icon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
      focusable="false"
    >
      <text
        x="34.5"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Jost, 'Segoe UI', Arial, sans-serif"
        fontWeight={700}
        fontSize={56}
        fill="#c81e1e"
      >
        ///:
      </text>
    </svg>
  )
}

const STICKER_CSS = `
.tg-sticker, .tg-sticker-mini {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
  font-family: 'Jost', 'Segoe UI', Arial, sans-serif;
  box-sizing: border-box;
  border: 2px solid #c81e1e;
  border-radius: 4px;
  transition: background-color 0.15s ease;
  width: fit-content;
}
.tg-sticker {
  align-items: stretch;
}
.tg-sticker:hover, .tg-sticker:focus-visible {
  background: rgba(200, 30, 30, 0.06);
}
.tg-icon-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  flex-shrink: 0;
}
.tg-sticker-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px 4px 0px;
  min-width: 0;
}
.tg-sticker-title {
  font-weight: 700;
  font-size: 13px;
  line-height: 1.2;
  color: #131313;
  white-space: nowrap;
  text-transform: uppercase;
}
.tg-sticker-cta {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: #6e6e6e;
  white-space: nowrap;
}
.tg-sticker-mini {
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}
.tg-sticker-mini:hover, .tg-sticker-mini:focus-visible {
  background: rgba(200, 30, 30, 0.06);
}
`

interface StudioStickerProps {
  href?: string
  className?: string
}

export function StudioSticker({ href = STUDIO_URL, className }: StudioStickerProps) {
  useJostFont()
  return (
    <>
      <style>{STICKER_CSS}</style>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className ? `tg-sticker ${className}` : 'tg-sticker'}
      >
        <span className="tg-icon-cell">
          <Icon size={26} />
        </span>
        <span className="tg-sticker-text">
          <span className="tg-sticker-title">33ghosts</span>
          <span className="tg-sticker-cta">Play more games</span>
        </span>
      </a>
    </>
  )
}

export function StudioStickerMini({ href = STUDIO_URL, className }: StudioStickerProps) {
  useJostFont()
  return (
    <>
      <style>{STICKER_CSS}</style>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="More games from 33ghosts"
        title="More games from 33ghosts"
        className={className ? `tg-sticker-mini ${className}` : 'tg-sticker-mini'}
      >
        <Icon size={26} />
      </a>
    </>
  )
}
