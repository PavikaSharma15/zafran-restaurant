import { useState } from 'react'
import './Cart.css'

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
      const res = await fetch('https://zafran-backend.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, total })
      })
      const data = await res.json()
      if (!res.ok) { alert(data.message); return }
      setOrdered(true)
    } catch (err) {
      alert('Something went wrong. Is the backend running?')
    }
  }

  if (ordered) {
    return (
      <div className="success-wrap">
        <div>
          <div className="gold-line center" />
          <p className="eyebrow">Order Confirmed</p>
          <h2 className="success-title">Thank You for Your Order</h2>
          <p className="success-text">
            Your order has been received and is being prepared.<br />
            Estimated time: <span style={{ color: 'var(--gold)' }}>35–45 minutes</span>
          </p>
          <div className="gold-line center" />
          <button className="btn-outline-white" onClick={() => { setOrdered(false); setItems(sampleItems) }}>
            Back to Cart
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <p className="eyebrow">Your Selection</p>
        <h1 className="cart-title">Your Order</h1>
        <div className="gold-line center" />
      </div>

      {items.length === 0 ? (
        <div className="empty-wrap">
          <p className="empty-text">Your cart is empty</p>
          <a href="/menu" className="btn-gold">Browse Menu</a>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-card">
                <img src={item.img} alt={item.name} className="cart-card-img" />
                <div className="cart-card-info">
                  <p className="cart-card-cuisine">{item.cuisine}</p>
                  <h3 className="cart-card-name">{item.name}</h3>
                  <p className="cart-card-price">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="qty-control">
                  <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
                <p className="item-total">₹{(item.price * item.qty).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="summary-col">
            <p className="summary-title">Order Summary</p>
            <div className="summary-line" />
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">GST (5%)</span>
              <span className="summary-value">₹{tax.toLocaleString()}</span>
            </div>
            <div className="summary-line" />
            <div className="summary-row">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-value">₹{total.toLocaleString()}</span>
            </div>
            <button className="place-order-btn" onClick={handleOrder}>Place Order</button>
            <a href="/menu" className="continue-link">← Continue Browsing</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart