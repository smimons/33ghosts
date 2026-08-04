import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'games', end: true },
  { to: '/about', label: 'about' },
]

function Header() {
  return (
    <header id="site-header">
      <div className="chrome-dots" aria-hidden="true">
        <span className="dot dot--teal" />
        <span className="dot dot--accent" />
        <span className="dot dot--magenta" />
      </div>
      <NavLink to="/" className="logo" end>
        ~/33ghosts
      </NavLink>
      <nav>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
