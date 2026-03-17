import { useState } from 'react'

function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert('Please fill in all fields')
      return
    }
    try {
      const url = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register'
  
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        alert(data.message)
        return
      }
  
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      alert(`Welcome, ${data.user.name}!`)
      window.location.href = '/'
    } catch (err) {
      alert('Something went wrong. Is the backend running?')
    }
  }

  return (
    <div style={styles.page}>

      {/* Left — Image */}
      <div style={styles.left}>
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
          alt="dining"
          style={styles.leftImg}
        />
        <div style={styles.leftOverlay} />
        <div style={styles.leftContent}>
          <p style={styles.eyebrow}>Members Only</p>
          <h2 style={styles.leftTitle}>The Zafran<br />Experience</h2>
          <div style={styles.goldLine} />
          <p style={styles.leftText}>
            Sign in to manage your reservations,<br />
            track your orders, and unlock exclusive<br />
            dining privileges.
          </p>
        </div>
      </div>

      {/* Right — Form */}
      <div style={styles.right}>
        <div style={styles.formBox}>

          <p style={styles.logoText}>ZAFRAN</p>
          <div style={styles.goldLine} />

          {/* Toggle */}
          <div style={styles.toggle}>
            <button
              onClick={() => setIsLogin(true)}
              style={{ ...styles.toggleBtn, color: isLogin ? 'var(--gold)' : 'var(--muted)', borderBottom: isLogin ? '1px solid var(--gold)' : '1px solid transparent' }}
            >Sign In</button>
            <button
              onClick={() => setIsLogin(false)}
              style={{ ...styles.toggleBtn, color: !isLogin ? 'var(--gold)' : 'var(--muted)', borderBottom: !isLogin ? '1px solid var(--gold)' : '1px solid transparent' }}
            >Create Account</button>
          </div>

          {/* Fields */}
          {!isLogin && (
            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange}
                placeholder="Your name" style={styles.input} />
            </div>
          )}

          <div style={styles.field}>
            <label style={styles.label}>Email Address</label>
            <input name="email" value={form.email} onChange={handleChange}
              placeholder="your@email.com" style={styles.input} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange}
              placeholder="••••••••" style={styles.input} />
          </div>

          {isLogin && (
            <p style={styles.forgot}>Forgot your password?</p>
          )}

          <button style={styles.btnGold} onClick={handleSubmit}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <p style={styles.switchText}>
            {isLogin ? "Don't have an account? " : 'Already a member? '}
            <span
              style={{ color: 'var(--gold)', cursor: 'pointer' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Create one' : 'Sign in'}
            </span>
          </p>

        </div>
      </div>

    </div>
  )
}

const styles = {
  page: { display: 'flex', height: '100vh', backgroundColor: 'var(--black)' },
  left: { flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  leftImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  leftOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.65)' },
  leftContent: { position: 'relative', zIndex: 2, padding: '60px', color: 'var(--ivory)' },
  eyebrow: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' },
  leftTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: '64px', lineHeight: 1.1, marginBottom: '28px' },
  goldLine: { width: '40px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '28px' },
  leftText: { fontSize: '14px', color: 'var(--muted)', lineHeight: '2.2' },
  right: { width: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(201,169,110,0.1)' },
  formBox: { width: '100%', padding: '60px 50px' },
  logoText: { fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', letterSpacing: '10px', color: 'var(--gold)', marginBottom: '20px', textAlign: 'center' },
  toggle: { display: 'flex', gap: '40px', marginBottom: '48px' },
  toggleBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', paddingBottom: '8px', transition: 'all 0.3s ease' },
  field: { marginBottom: '32px' },
  label: { display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' },
  input: { width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)', color: 'var(--ivory)', padding: '12px 0', fontSize: '14px', fontFamily: 'Raleway, sans-serif', outline: 'none' },
  forgot: { fontSize: '12px', color: 'var(--muted)', textAlign: 'right', marginTop: '-16px', marginBottom: '32px', cursor: 'pointer' },
  btnGold: { width: '100%', padding: '16px', backgroundColor: 'var(--gold)', color: 'var(--black)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', fontWeight: 500, border: 'none', cursor: 'pointer', marginBottom: '24px' },
  switchText: { textAlign: 'center', fontSize: '13px', color: 'var(--muted)' }
}

export default Login