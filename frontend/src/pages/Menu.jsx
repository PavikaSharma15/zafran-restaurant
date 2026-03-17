import { useState } from 'react'

const menuData = {
  Indian: [
    { name: 'Dal Makhani', desc: 'Black lentils slow-cooked overnight with cream and butter', price: '₹850', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80' },
    { name: 'Lamb Rogan Josh', desc: 'Kashmiri braised lamb in aromatic whole spices', price: '₹1,450', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80' },
    { name: 'Paneer Makhani', desc: 'Cottage cheese in velvety tomato and cashew gravy', price: '₹750', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
    { name: 'Biryani Nizami', desc: 'Aged basmati layered with slow-cooked meat and saffron', price: '₹1,200', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80' },
  ],
  Continental: [
    { name: 'Truffle Risotto', desc: 'Arborio rice with black truffle, aged parmesan and dry white wine', price: '₹1,600', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80' },
    { name: 'Wild Mushroom Wellington', desc: 'Portobello and mixed wild mushrooms in golden puff pastry with red wine jus', price: '₹1,800', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
    { name: 'French Onion Soup', desc: 'Slow-caramelised onions in rich broth, topped with gruyère crouton', price: '₹850', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80' },
    { name: 'Spinach & Ricotta Cannelloni', desc: 'Hand-rolled pasta filled with ricotta, spinach and pine nuts in tomato cream', price: '₹1,200', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
  ],
  Burmese: [
    { name: 'Mushroom Truffle Tart', desc: 'Wild mushrooms and black truffle in a buttery shortcrust pastry shell', price: '₹1,100', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80' },
    { name: 'Burrata & Heirloom Tomato', desc: 'Fresh burrata with heirloom tomatoes, aged balsamic and micro basil', price: '₹950', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80' },
    { name: 'Saag Paneer Royal', desc: 'Fresh cottage cheese in velvety spinach gravy with fenugreek and cream', price: '₹750', img: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&q=80' },
    { name: 'Mezze Platter', desc: 'Smoked hummus, baba ganoush, stuffed grape leaves and warm pita', price: '₹850', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80' },
  ]
}

function Menu() {
  const [activeTab, setActiveTab] = useState('Indian')

  return (
    <div style={{ backgroundColor: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>

      {/* Header */}
      <div style={styles.header}>
        <p style={styles.eyebrow}>Our Offerings</p>
        <h1 style={styles.title}>The Menu</h1>
        <div style={styles.divider} />
        <p style={styles.subtitle}>A curated selection of dishes celebrating three great culinary traditions</p>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {Object.keys(menuData).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              color: activeTab === tab ? 'var(--gold)' : 'var(--muted)',
              borderBottom: activeTab === tab ? '1px solid var(--gold)' : '1px solid transparent'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {menuData[activeTab].map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.imgWrap}>
              <img src={item.img} alt={item.name} style={styles.img} />
              <div style={styles.imgOverlay} />
            </div>
            <div style={styles.cardBody}>
              <div style={styles.cardTop}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <span style={styles.price}>{item.price}</span>
              </div>
              <p style={styles.desc}>{item.desc}</p>
              <button style={styles.addBtn}>Add to Order</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

const styles = {
  header: { textAlign: 'center', padding: '60px 40px 40px' },
  eyebrow: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' },
  title: { fontFamily: 'Cormorant Garamond, serif', fontSize: '80px', color: 'var(--ivory)', letterSpacing: '10px', marginBottom: '20px' },
  divider: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '0 auto 24px' },
  subtitle: { fontSize: '14px', color: 'var(--muted)', lineHeight: '2', maxWidth: '500px', margin: '0 auto' },
  tabs: { display: 'flex', justifyContent: 'center', gap: '60px', padding: '40px 0', borderBottom: '1px solid rgba(201,169,110,0.1)' },
  tab: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', paddingBottom: '8px', transition: 'color 0.3s ease' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', maxWidth: '1200px', margin: '60px auto', padding: '0 60px' },
  card: { backgroundColor: '#111', overflow: 'hidden' },
  imgWrap: { position: 'relative', height: '280px', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' },
  imgOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 50%)' },
  cardBody: { padding: '28px 32px 32px' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' },
  itemName: { fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: 'var(--ivory)' },
  price: { fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: 'var(--gold)', whiteSpace: 'nowrap' },
  desc: { fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '24px' },
  addBtn: { background: 'none', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '10px 28px', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', cursor: 'pointer' }
}

export default Menu