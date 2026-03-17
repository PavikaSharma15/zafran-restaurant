import { Link } from 'react-router-dom'

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
    name: 'Mohinga',
    desc: 'Burma\'s soul — rice noodles in a rich catfish broth with crispy fritters',
    cuisine: 'Burmese',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80'
  }
]

function Home() {
  return (
    <div style={{ backgroundColor: 'var(--black)' }}>

      {/* HERO */}
      <section style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="hero"
          style={styles.heroBg}
        />
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroEyebrow}>EST. 2024 &nbsp;·&nbsp; NEW DELHI</p>
          <h1 style={styles.heroTitle}>ZAFRAN</h1>
          <div style={styles.heroDivider} />
          <p style={styles.heroSub}>An Odyssey of Flavour</p>
          <div style={styles.heroBtns}>
            <Link to="/menu" style={styles.btnGold}>Explore Menu</Link>
            <Link to="/reservations" style={styles.btnOutline}>Reserve a Table</Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.intro}>
        <p style={styles.introLabel}>Our Philosophy</p>
        <h2 style={styles.introTitle}>Where Heritage Meets Haute Cuisine</h2>
        <p style={styles.introText}>
          At Zafran, we honour the ancient spice routes of India, the colonial elegance
          of Continental dining, and the quiet refinement of Burma — crafting each dish
          as a story told through flavour, texture, and memory.
        </p>
        <div style={styles.introDivider} />
      </section>

      {/* FEATURED DISHES */}
      <section style={styles.dishes}>
        <p style={styles.introLabel}>From Our Kitchen</p>
        <h2 style={{ ...styles.introTitle, marginBottom: '60px' }}>Signature Creations</h2>
        <div style={styles.dishGrid}>
          {dishes.map((dish, i) => (
            <div key={i} style={styles.dishCard}>
              <div style={styles.dishImgWrap}>
                <img src={dish.img} alt={dish.name} style={styles.dishImg} />
                <div style={styles.dishOverlay} />
                <span style={styles.dishCuisine}>{dish.cuisine}</span>
              </div>
              <div style={styles.dishInfo}>
                <h3 style={styles.dishName}>{dish.name}</h3>
                <p style={styles.dishDesc}>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/menu" style={styles.btnGold}>View Full Menu</Link>
        </div>
      </section>

      {/* RESERVATION BANNER */}
      <section style={styles.resBanner}>
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="dining"
          style={styles.heroBg}
        />
        <div style={{ ...styles.heroOverlay, opacity: 0.75 }} />
        <div style={styles.resContent}>
          <p style={styles.introLabel}>Join Us</p>
          <h2 style={{ ...styles.introTitle, color: 'var(--ivory)', marginBottom: '16px' }}>
            Reserve Your Table
          </h2>
          <p style={{ ...styles.introText, marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            An intimate dining experience awaits. Let us craft an evening you will remember.
          </p>
          <Link to="/reservations" style={styles.btnGold}>Make a Reservation</Link>
        </div>
      </section>

    </div>
  )
}

const styles = {
  hero: { position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  heroBg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.6)' },
  heroContent: { position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' },
  heroEyebrow: { fontFamily: 'Raleway', fontSize: '11px', letterSpacing: '6px', color: 'var(--gold)', marginBottom: '24px', textTransform: 'uppercase' },
  heroTitle: { fontFamily: 'Cormorant Garamond', fontSize: '120px', letterSpacing: '30px', color: 'var(--ivory)', lineHeight: 1, marginBottom: '24px' },
  heroDivider: { width: '60px', height: '1px', backgroundColor: 'var(--gold)', margin: '0 auto 24px' },
  heroSub: { fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '24px', color: 'var(--gold-light)', marginBottom: '48px' },
  heroBtns: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' },
  btnGold: {
    padding: '14px 36px', backgroundColor: 'var(--gold)', color: 'var(--black)',
    fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
    fontFamily: 'Raleway', fontWeight: 500, border: '1px solid var(--gold)'
  },
  btnOutline: {
    padding: '14px 36px', backgroundColor: 'transparent', color: 'var(--ivory)',
    fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
    fontFamily: 'Raleway', fontWeight: 400, border: '1px solid var(--ivory)'
  },
  intro: { padding: '120px 60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' },
  introLabel: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' },
  introTitle: { fontFamily: 'Cormorant Garamond', fontSize: '52px', color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '28px' },
  introText: { fontSize: '15px', lineHeight: '2', color: 'var(--muted)', fontWeight: 300 },
  introDivider: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '48px auto 0' },
  dishes: { padding: '80px 60px 120px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' },
  dishGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  dishCard: { textAlign: 'left' },
  dishImgWrap: { position: 'relative', overflow: 'hidden', height: '340px' },
  dishImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' },
  dishOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)' },
  dishCuisine: { position: 'absolute', top: '16px', left: '16px', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', backgroundColor: 'rgba(8,8,8,0.7)', padding: '6px 12px' },
  dishInfo: { padding: '24px 0 0' },
  dishName: { fontFamily: 'Cormorant Garamond', fontSize: '28px', color: 'var(--ivory)', marginBottom: '10px' },
  dishDesc: { fontSize: '13px', lineHeight: '1.8', color: 'var(--muted)', fontWeight: 300 },
  resBanner: { position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  resContent: { position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }
}

export default Home