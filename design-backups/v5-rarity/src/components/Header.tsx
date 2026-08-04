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
        <span className="spark">&#10022;</span> 33ghosts
      </NavLink>
      <nav>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
