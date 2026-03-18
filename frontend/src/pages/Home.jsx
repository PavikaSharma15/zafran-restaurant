import { Link } from 'react-router-dom'
import './Home.css'

const dishes = [
  {
    name: 'Dal Makhani',
    desc: 'Slow-cooked black lentils simmered overnight in a tandoor, finished with cream and butter',
    cuisine: 'Indian',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80'
  },
  {
    name: 'Beef Wellington',
    desc: 'Tender beef fillet wrapped in mushroom duxelles and golden puff pastry',
    cuisine: 'Continental',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
  },
  {
    name: 'Saag Paneer Royal',
    desc: 'Fresh cottage cheese in velvety spinach gravy with fenugreek and cream',
    cuisine: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&q=80'
  }
]

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="hero" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">EST. 2024 &nbsp;·&nbsp; NEW DELHI</p>
          <h1 className="hero-title">ZAFRAN</h1>
          <div className="gold-line" />
          <p className="hero-sub">An Odyssey of Flavour</p>
          <div className="hero-btns">
            <Link to="/menu" className="btn-gold">Explore Menu</Link>
            <Link to="/reservations" className="btn-outline">Reserve a Table</Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <p className="eyebrow">Our Philosophy</p>
        <h2 className="section-title">Where Heritage Meets Haute Cuisine</h2>
        <p className="intro-text">
          At Zafran, we honour the ancient spice routes of India, the colonial elegance
          of Continental dining, and the quiet refinement of Burma — crafting each dish
          as a story told through flavour, texture, and memory.
        </p>
        <div className="gold-line center" />
      </section>

      {/* FEATURED DISHES */}
      <section className="dishes">
        <p className="eyebrow">From Our Kitchen</p>
        <h2 className="section-title">Signature Creations</h2>
        <div className="dish-grid">
          {dishes.map((dish, i) => (
            <div key={i} className="dish-card">
              <div className="dish-img-wrap">
                <img src={dish.img} alt={dish.name} className="dish-img" />
                <div className="dish-overlay" />
                <span className="dish-cuisine">{dish.cuisine}</span>
              </div>
              <div className="dish-info">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-desc">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <Link to="/menu" className="btn-gold">View Full Menu</Link>
        </div>
      </section>

      {/* RESERVATION BANNER */}
      <section className="res-banner">
        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80" alt="dining" className="hero-bg" />
        <div className="hero-overlay dark" />
        <div className="res-content">
          <p className="eyebrow">Join Us</p>
          <h2 className="section-title light">Reserve Your Table</h2>
          <p className="res-text">An intimate dining experience awaits. Let us craft an evening you will remember.</p>
          <Link to="/reservations" className="btn-gold">Make a Reservation</Link>
        </div>
      </section>

    </div>
  )
}

export default Home