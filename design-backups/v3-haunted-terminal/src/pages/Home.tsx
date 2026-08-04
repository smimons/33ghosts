import { games, STATUS_META } from '../data/games'
import type { Game } from '../data/games'
import './Home.css'

const STATUS_BRACKET: Record<Game['status'], (label: string) => string> = {
  live: (l) => `[ ${l} ]`,
  'awaiting-launch': (l) => `[ ${l} ]`,
  'in-development': (l) => `{ ${l} }`,
  prototype: (l) => `( ${l} )`,
  concept: (l) => `/* ${l} */`,
}

function GameCard({ game }: { game: Game }) {
  const status = STATUS_META[game.status]
  const label = STATUS_BRACKET[game.status](status.label)
  const content = (
    <>
      <span className={`status status--${game.status}`} title={status.description}>
        {label}
      </span>
      <h2>{game.name}</h2>
      <p className="subtitle">{game.subtitle}</p>
      {game.url && <span className="visit">./open &rarr;</span>}
    </>
  )

  const cardClass = `card card--${game.status}`

  if (game.url) {
    return (
      <a className={cardClass} href={game.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <div className={`${cardClass} card--inert`}>{content}</div>
}

function Home() {
  return (
    <>
      <section id="intro">
        <p className="eyebrow">// solo game studio</p>
        <h1>
          33ghosts<span className="cursor">&nbsp;</span>
        </h1>
        <p className="tagline">Here's what's currently haunting the workshop.</p>
      </section>

      <section id="games">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </>
  )
}

export default Home
