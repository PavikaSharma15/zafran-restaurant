import { useState } from 'react'

function Reservations() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', occasion: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.date || !form.time || !form.guests) {
      alert('Please fill in all required fields')
      return
    }
    try {
      const res = await fetch('https://zafran-backend.onrender.com/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) {
        alert(data.message)
        return
      }
      setSubmitted(true)
    } catch (err) {
      alert('Something went wrong. Is the backend running?')
    }
  }

  if (submitted) {
    return (
      <div style={styles.successWrap}>
        <div style={styles.successBox}>
          <div style={styles.divider} />
          <p style={styles.eyebrow}>Confirmation</p>
          <h2 style={styles.successTitle}>Your Table Awaits</h2>
          <p style={styles.successText}>
            Thank you, <span style={{ color: 'var(--gold)' }}>{form.name}</span>. <br />
            We have reserved a table for <span style={{ color: 'var(--gold)' }}>{form.guests} guests</span> on <span style={{ color: 'var(--gold)' }}>{form.date}</span> at <span style={{ color: 'var(--gold)' }}>{form.time}</span>.<br /><br />
            A confirmation will be sent to {form.email}.
          </p>
          <div style={styles.divider} />
          <button style={styles.btnOutline} onClick={() => setSubmitted(false)}>
            Make Another Reservation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>

      {/* Banner */}
      <div style={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="dining"
          style={styles.bannerImg}
        />
        <div style={styles.bannerOverlay} />
        <div style={styles.bannerContent}>
          <p style={styles.eyebrow}>Reserve</p>
          <h1 style={styles.bannerTitle}>A Table for You</h1>
          <div style={styles.goldLine} />
        </div>
      </div>

      {/* Form */}
      <div style={styles.formWrap}>
        <p style={styles.formNote}>
          For parties of 8 or more, please contact us directly at <span style={{ color: 'var(--gold)' }}>reservations@zafran.in</span>
        </p>

        <div style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange}
              placeholder="Your name" style={styles.input} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Email Address *</label>
            <input name="email" value={form.email} onChange={handleChange}
              placeholder="your@email.com" style={styles.input} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange}
              placeholder="+91 00000 00000" style={styles.input} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Number of Guests *</label>
            <select name="guests" value={form.guests} onChange={handleChange} style={styles.input}>
              <option value="">Select guests</option>
              {[1,2,3,4,5,6,7].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Date *</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Preferred Time *</label>
            <select name="time" value={form.time} onChange={handleChange} style={styles.input}>
              <option value="">Select time</option>
              <option>12:30 PM</option>
              <option>13:00 PM</option>
              <option>13:30 PM</option>
              <option>19:00 PM</option>
              <option>19:30 PM</option>
              <option>20:00 PM</option>
              <option>20:30 PM</option>
              <option>21:00 PM</option>
            </select>
          </div>
          <div style={{ ...styles.field, gridColumn: '1 / -1' }}>
            <label style={styles.label}>Special Occasion</label>
            <select name="occasion" value={form.occasion} onChange={handleChange} style={styles.input}>
              <option value="">None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Dinner</option>
              <option>Proposal</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button style={styles.btnGold} onClick={handleSubmit}>
            Confirm Reservation
          </button>
        </div>
      </div>

    </div>
  )
}

const styles = {
  banner: { position: 'relative', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  bannerImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  bannerOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.65)' },
  bannerContent: { position: 'relative', zIndex: 2, textAlign: 'center' },
  eyebrow: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' },
  bannerTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: '72px', color: 'var(--ivory)', letterSpacing: '8px' },
  goldLine: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '24px auto 0' },
  formWrap: { maxWidth: '800px', margin: '0 auto', padding: '80px 40px 120px' },
  formNote: { textAlign: 'center', fontSize: '13px', color: 'var(--muted)', marginBottom: '60px', lineHeight: '2' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' },
  field: { display: 'flex', flexDirection: 'column', gap: '10px' },
  label: { fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)' },
  input: {
    backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)',
    color: 'var(--ivory)', padding: '12px 0', fontSize: '14px', fontFamily: 'Raleway, sans-serif',
    outline: 'none', width: '100%'
  },
  btnGold: {
    padding: '16px 48px', backgroundColor: 'var(--gold)', color: 'var(--black)',
    fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
    fontFamily: 'Raleway, sans-serif', fontWeight: 500, border: '1px solid var(--gold)', cursor: 'pointer'
  },
  successWrap: { backgroundColor: 'var(--black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  successBox: { textAlign: 'center', padding: '60px', maxWidth: '600px' },
  divider: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '0 auto 32px' },
  successTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', color: 'var(--ivory)', marginBottom: '24px' },
  successText: { fontSize: '15px', color: 'var(--muted)', lineHeight: '2.2', marginBottom: '40px' },
  btnOutline: {
    padding: '14px 36px', backgroundColor: 'transparent', color: 'var(--ivory)',
    fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
    fontFamily: 'Raleway, sans-serif', border: '1px solid var(--ivory)', cursor: 'pointer'
  }
}

export default Reservations