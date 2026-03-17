import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [hovered, setHovered] = useState(null)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/reservations', label: 'Reservations' },
    { to: '/cart', label: 'Cart' },
    { to: '/login', label: 'Login' },
  ]

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        {links.slice(0, 2).map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{ ...styles.link, color: hovered === link.to ? 'var(--gold)' : 'var(--ivory)' }}
            onMouseEnter={() => setHovered(link.to)}
            onMouseLeave={() => setHovered(null)}
          >{link.label}</Link>
        ))}
      </div>

      <Link to="/" style={styles.logo}>ZAFRAN</Link>

      <div style={styles.right}>
        {links.slice(2).map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{ ...styles.link, color: hovered === link.to ? 'var(--gold)' : 'var(--ivory)' }}
            onMouseEnter={() => setHovered(link.to)}
            onMouseLeave={() => setHovered(null)}
          >{link.label}</Link>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '28px 60px', position: 'fixed', top: 0, left: 0, right: 0,
    zIndex: 100, backgroundColor: 'rgba(8,8,8,0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(201,169,110,0.15)'
  },
  logo: {
    fontFamily: 'Cormorant Garamond, serif', fontSize: '28px',
    letterSpacing: '12px', color: 'var(--gold)', fontWeight: 400
  },
  left: { display: 'flex', gap: '40px' },
  right: { display: 'flex', gap: '40px' },
  link: {
    fontFamily: 'Raleway, sans-serif', fontSize: '11px',
    letterSpacing: '3px', textTransform: 'uppercase',
    transition: 'color 0.3s ease', fontWeight: 400
  }
}

export default Navbar