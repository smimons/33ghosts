import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { games } from '../data/games'

const NAV_LINKS = [
  { to: '/', label: 'Games', num: '01', end: true },
  { to: '/about', label: 'About', num: '02' },
]

const gameLinks: string[] = games.map((game) => game.url).filter((url) => url !== null)

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const openRandomGame = () => {
    const pick = gameLinks[Math.floor(Math.random() * gameLinks.length)]
    window.open(pick, '_blank', 'noopener,noreferrer')
    close()
  }

  return (
    <>
      <div className="stripe" aria-hidden="true" />
      <header id="site-header">
        <NavLink to="/" className="logo" end onClick={close}>
          33GHOSTS
        </NavLink>

        <button
          type="button"
          className={`burger${open ? ' burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'open' : undefined}>
          <button type="button" className="nav-item" onClick={openRandomGame}>
            <span className="num">?</span>
            Random Game
          </button>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              onClick={close}
            >
              <span className="num">{link.num}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header
