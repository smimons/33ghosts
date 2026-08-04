import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Games', end: true },
  { to: '/about', label: 'About' },
]

function Header() {
  return (
    <header id="site-header">
      <NavLink to="/" className="logo" end>
        33ghosts
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
