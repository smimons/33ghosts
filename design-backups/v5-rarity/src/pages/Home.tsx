import { games, STATUS_META } from '../data/games'
import type { Game, GameStatus } from '../data/games'
import './Home.css'

interface Rarity {
  key: string
  label: string
  stars: number
}

const RARITY: Record<GameStatus, Rarity> = {
  concept: { key: 'common', label: 'Common', stars: 1 },
  prototype: { key: 'uncommon', label: 'Uncommon', stars: 2 },
  'in-development': { key: 'rare', label: 'Rare', stars: 3 },
  'awaiting-launch': { key: 'epic', label: 'Epic', stars: 4 },
  live: { key: 'legendary', label: 'Legendary', stars: 5 },
}

function GameCard({ game, index }: { game: Game; index: number }) {
  const status = STATUS_META[game.status]
  const rarity = RARITY[game.status]
  const cardClass = `card rarity--${rarity.key}`

  const content = (
    <>
      {rarity.key === 'legendary' && <span className="holo" aria-hidden="true" />}
      <div className="card-banner">
        <span className="rarity-label">{rarity.label}</span>
        <span className="stars" aria-hidden="true">
          {'★'.repeat(rarity.stars)}
          {'☆'.repeat(5 - rarity.stars)}
        </span>
      </div>
      <div className="card-body">
        <h2>{game.name}</h2>
        <p className="flavor" title={status.description}>
          &ldquo;{game.subtitle}&rdquo;
        </p>
      </div>
      <div className="card-footer">
        <span className="card-no">
          No. {String(index + 1).padStart(3, '0')}/{String(games.length).padStart(3, '0')}
        </span>
        {game.url && <span className="play">&#9654; Play</span>}
      </div>
    </>
  )

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
        <p className="eyebrow">Collection &mdash; 33ghosts</p>
        <h1>The Lineup</h1>
        <p className="tagline">Gotta ship 'em all.</p>
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
