import { games, STATUS_META } from './data/games'
import type { Game } from './data/games'
import './App.css'

function GameCard({ game }: { game: Game }) {
  const status = STATUS_META[game.status]
  const content = (
    <>
      <span className={`status status--${game.status}`} title={status.description}>
        {status.label}
      </span>
      <h2>{game.name}</h2>
      <p className="subtitle">{game.subtitle}</p>
      {game.url && <span className="visit">Visit site &rarr;</span>}
    </>
  )

  const cardClass = `card card--${game.status}`

  if (game.url) {
    return (
      <a className={cardClass} href={game.url} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <div className={`${cardClass} card--inert`}>{content}</div>
}

function App() {
  return (
    <>
      <header id="top">
        <h1>we are 33ghosts</h1>
        <p className="tagline">A solo puzzle game studio. Here's what's cooking.</p>
      </header>

      <section id="games">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </>
  )
}

export default App
