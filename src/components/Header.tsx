import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { games } from '../data/games'

const NAV_LINKS = [
  { to: '/', label: 'Our Games', num: '01', end: true },
  { to: '/about', label: 'About', num: '02' },
  { to: '/contact', label: 'Contact', num: '03' },
]

const gameLinks: string[] = games.map((game) => game.url).filter((url) => url !== null)

// keep in sync with the max-width: 680px breakpoint in Header.css that
// switches nav between the horizontal desktop layout and the mobile drawer
const MOBILE_QUERY = '(max-width: 680px)'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function Header() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const close = () => setOpen(false)

  const openRandomGame = () => {
    const pick = gameLinks[Math.floor(Math.random() * gameLinks.length)]
    window.open(pick, '_blank', 'noopener,noreferrer')
    close()
  }

  return (
    <div className="header-shell">
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

        <nav className={open ? 'open' : undefined} inert={isMobile && !open}>
          <div className="nav-inner">
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
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
