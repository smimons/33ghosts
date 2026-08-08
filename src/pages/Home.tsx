import type { CSSProperties } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { games, STATUS_META } from '../data/games'
import type { Game, GameStatus } from '../data/games'
import './Home.css'

const STATUS_STEP: Record<GameStatus, number> = {
  concept: 1,
  prototype: 2,
  'in-development': 3,
  'awaiting-launch': 4,
  live: 5,
}

const STEPS = [1, 2, 3, 4, 5]

// Reveals the stepper fill once the card scrolls into view, instead of it
// just being there on load -- fires once, then disconnects.
function useInView() {
  const [visible, setVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const ref = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect()
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    observerRef.current = observer
  }, [])

  return [ref, visible] as const
}

function Stepper({ status }: { status: GameStatus }) {
  const current = STATUS_STEP[status]
  return (
    <div className="stepper" aria-hidden="true">
      {STEPS.map((step) => (
        <span
          key={step}
          className={
            step === current ? 'step step--current' : step < current ? 'step step--done' : 'step'
          }
        />
      ))}
    </div>
  )
}

function GameCard({ game, index }: { game: Game; index: number }) {
  const status = STATUS_META[game.status]
  const [ref, visible] = useInView()
  const content = (
    <>
      <Stepper status={game.status} />
      <span className="status-label">
        Step {STATUS_STEP[game.status]}/5 &mdash; {status.label}
      </span>
      <h2>{game.name}</h2>
      <p className="subtitle">{game.subtitle}</p>
      {game.url && (
        <span className="visit">
          Open <span className="arrow">&rarr;</span>
        </span>
      )}
    </>
  )

  const cardClass = `card card--${game.status}${visible ? ' is-visible' : ''}`
  const style = { '--i': index } as CSSProperties

  if (game.url) {
    return (
      <a
        ref={ref}
        className={cardClass}
        style={style}
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className={`${cardClass} card--inert`} style={style}>
      {content}
    </div>
  )
}

function Home() {
  useEffect(() => {
    document.title = 'Games — 33ghosts'
  }, [])

  return (
    <>
      <section id="intro">
        <p className="eyebrow">Part No. 01</p>
        <h1>Our Games</h1>
        <p className="tagline">
          Everything currently in the works, from finished releases to early sketches.
        </p>
      </section>

      <section id="games">
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </section>
    </>
  )
}

export default Home
