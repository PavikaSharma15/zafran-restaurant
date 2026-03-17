function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <p style={styles.logo}>ZAFRAN</p>
            <p style={styles.tagline}>An Odyssey of Flavour</p>
          </div>
          <div style={styles.cols}>
            <div>
              <p style={styles.colHead}>Visit Us</p>
              <p style={styles.colText}>12, Aurangzeb Road</p>
              <p style={styles.colText}>New Delhi — 110011</p>
            </div>
            <div>
              <p style={styles.colHead}>Hours</p>
              <p style={styles.colText}>Lunch: 12:30 — 15:00</p>
              <p style={styles.colText}>Dinner: 19:00 — 23:30</p>
            </div>
            <div>
              <p style={styles.colHead}>Contact</p>
              <p style={styles.colText}>reservations@zafran.in</p>
              <p style={styles.colText}>+91 11 4567 8900</p>
            </div>
          </div>
        </div>
        <div style={styles.bottom}>
          <div style={styles.line} />
          <p style={styles.copy}>© 2024 Zafran. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  const styles = {
    footer: { backgroundColor: '#080808', padding: '80px 60px 40px', borderTop: '1px solid rgba(201,169,110,0.15)' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px', flexWrap: 'wrap', gap: '40px' },
    brand: {},
    logo: { fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', letterSpacing: '10px', color: 'var(--gold)', marginBottom: '8px' },
    tagline: { fontStyle: 'italic', color: 'var(--muted)', fontSize: '14px', fontFamily: 'Cormorant Garamond, serif' },
    cols: { display: 'flex', gap: '80px', flexWrap: 'wrap' },
    colHead: { fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' },
    colText: { fontSize: '13px', color: 'var(--muted)', lineHeight: '2' },
    bottom: {},
    line: { height: '1px', backgroundColor: 'rgba(201,169,110,0.15)', marginBottom: '24px' },
    copy: { fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textAlign: 'center' }
  }
  
  export default Footer