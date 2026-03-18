import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
      </div>

      <Link to="/" className="navbar-logo">ZAFRAN</Link>

      <div className="navbar-right">
        <Link to="/reservations" className="nav-link">Reservations</Link>
        <Link to="/cart" className="nav-link cart-nav-link">
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>

      <div className="navbar-mobile-right">
        <Link to="/cart" className="nav-link cart-nav-link">
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" className="mobile-link" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/reservations" className="mobile-link" onClick={() => setMenuOpen(false)}>Reservations</Link>
          <Link to="/cart" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
          <Link to="/login" className="mobile-link" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar