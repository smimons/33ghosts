import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Games', num: '01', end: true },
  { to: '/about', label: 'About', num: '02' },
]

function Header() {
  return (
    <>
      <div className="stripe" aria-hidden="true" />
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
