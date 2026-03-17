import { useState } from 'react'

const sampleItems = [
  { id: 1, name: 'Dal Makhani', cuisine: 'Indian', price: 850, qty: 1, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80' },
  { id: 2, name: 'Truffle Risotto', cuisine: 'Continental', price: 1600, qty: 1, img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&q=80' },
  { id: 3, name: 'Mushroom Truffle Tart', cuisine: 'Vegetarian', price: 1100, qty: 2, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&q=80' },
]

function Cart() {
  const [items, setItems] = useState(sampleItems)
  const [ordered, setOrdered] = useState(false)

  const updateQty = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ).filter(item => item.qty > 0))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + tax

  const handleOrder = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, total })
      })
      const data = await res.json()
      if (!res.ok) {
        alert(data.message)
        return
      }
      setOrdered(true)
    } catch (err) {
      alert('Something went wrong. Is the backend running?')
    }
  }

  if (ordered) {
    return (
      <div style={styles.successWrap}>
        <div style={{ textAlign: 'center' }}>
          <div style={styles.goldLine} />
          <p style={styles.eyebrow}>Order Confirmed</p>
          <h2 style={styles.successTitle}>Thank You for Your Order</h2>
          <p style={styles.successText}>
            Your order has been received and is being prepared.<br />
            Estimated time: <span style={{ color: 'var(--gold)' }}>35–45 minutes</span>
          </p>
          <div style={styles.goldLine} />
          <button style={styles.btnOutline} onClick={() => { setOrdered(false); setItems(sampleItems) }}>
            Back to Cart
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={styles.header}>
        <p style={styles.eyebrow}>Your Selection</p>
        <h1 style={styles.title}>Your Order</h1>
        <div style={styles.goldLine} />
      </div>

      {items.length === 0 ? (
        <div style={styles.emptyWrap}>
          <p style={styles.emptyText}>Your cart is empty</p>
          <a href="/menu" style={styles.btnGold}>Browse Menu</a>
        </div>
      ) : (
        <div style={styles.layout}>
          <div style={styles.itemsCol}>
            {items.map(item => (
              <div key={item.id} style={styles.card}>
                <img src={item.img} alt={item.name} style={styles.cardImg} />
                <div style={styles.cardInfo}>
                  <p style={styles.cardCuisine}>{item.cuisine}</p>
                  <h3 style={styles.cardName}>{item.name}</h3>
                  <p style={styles.cardPrice}>₹{item.price.toLocaleString()}</p>
                </div>
                <div style={styles.qtyControl}>
                  <button style={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                  <span style={styles.qtyNum}>{item.qty}</span>
                  <button style={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
                <p style={styles.itemTotal}>₹{(item.price * item.qty).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div style={styles.summaryCol}>
            <p style={styles.summaryTitle}>Order Summary</p>
            <div style={styles.summaryLine} />
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Subtotal</span>
              <span style={styles.summaryValue}>₹{subtotal.toLocaleString()}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>GST (5%)</span>
              <span style={styles.summaryValue}>₹{tax.toLocaleString()}</span>
            </div>
            <div style={styles.summaryLine} />
            <div style={styles.summaryRow}>
              <span style={{ ...styles.summaryLabel, color: 'var(--ivory)', fontSize: '15px' }}>Total</span>
              <span style={{ ...styles.summaryValue, color: 'var(--gold)', fontSize: '22px', fontFamily: 'Cormorant Garamond, serif' }}>₹{total.toLocaleString()}</span>
            </div>
            <button style={styles.btnGold} onClick={handleOrder}>
              Place Order
            </button>
            <a href="/menu" style={styles.continueShopping}>← Continue Browsing</a>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  header: { textAlign: 'center', padding: '40px 40px 60px' },
  eyebrow: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' },
  title: { fontFamily: 'Cormorant Garamond, serif', fontSize: '72px', color: 'var(--ivory)', letterSpacing: '8px', marginBottom: '20px' },
  goldLine: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '0 auto 28px' },
  layout: { display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', maxWidth: '1100px', margin: '0 auto', padding: '0 60px 120px' },
  itemsCol: { display: 'flex', flexDirection: 'column', gap: '2px' },
  card: { display: 'flex', alignItems: 'center', gap: '24px', backgroundColor: '#111', padding: '20px 24px' },
  cardImg: { width: '80px', height: '80px', objectFit: 'cover' },
  cardInfo: { flex: 1 },
  cardCuisine: { fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' },
  cardName: { fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: 'var(--ivory)', marginBottom: '4px' },
  cardPrice: { fontSize: '13px', color: 'var(--muted)' },
  qtyControl: { display: 'flex', alignItems: 'center', gap: '16px' },
  qtyBtn: { background: 'none', border: '1px solid rgba(201,169,110,0.3)', color: 'var(--gold)', width: '32px', height: '32px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  qtyNum: { color: 'var(--ivory)', fontSize: '16px', minWidth: '20px', textAlign: 'center' },
  itemTotal: { fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: 'var(--ivory)', minWidth: '100px', textAlign: 'right' },
  summaryCol: { backgroundColor: '#111', padding: '40px 32px', height: 'fit-content' },
  summaryTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: 'var(--ivory)', marginBottom: '24px' },
  summaryLine: { height: '1px', backgroundColor: 'rgba(201,169,110,0.15)', margin: '20px 0' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  summaryLabel: { fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)' },
  summaryValue: { fontSize: '14px', color: 'var(--ivory)' },
  btnGold: { display: 'block', width: '100%', padding: '16px', backgroundColor: 'var(--gold)', color: 'var(--black)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', fontWeight: 500, border: 'none', cursor: 'pointer', marginTop: '32px', marginBottom: '16px', textAlign: 'center', textDecoration: 'none' },
  continueShopping: { display: 'block', textAlign: 'center', fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', textDecoration: 'none' },
  emptyWrap: { textAlign: 'center', padding: '100px 40px' },
  emptyText: { fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: 'var(--muted)', marginBottom: '40px' },
  successWrap: { backgroundColor: 'var(--black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  successTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', color: 'var(--ivory)', marginBottom: '24px' },
  successText: { fontSize: '15px', color: 'var(--muted)', lineHeight: '2.2', marginBottom: '40px' },
  btnOutline: { padding: '14px 36px', backgroundColor: 'transparent', color: 'var(--ivory)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', border: '1px solid var(--ivory)', cursor: 'pointer' }
}

export default Cart