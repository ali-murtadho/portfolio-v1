export default function Hero({name='Ali Murtadho', title='Frontend Engineer', summary}){
  return (
    <section className="hero card">
      <div className="left">
        <h1 className="headline">{name}</h1>
        <p className="sub">{title} — building accessible, fast web experiences.</p>
        <p style={{color:'var(--muted)'}}>{summary || 'I design and implement interfaces using React and modern web tools. Open to freelancing and full-time roles.'}</p>
        <div className="cta">
          <a className="btn" href="/assets/CV_Ali-Murtadho_June_2026.pdf" target="_blank" rel="noreferrer">Download CV</a>
          <a className="btn secondary" href="/contact">Contact</a>
        </div>
      </div>

      <div className="right">
        <img className="avatar" src="/assets/profile.svg" alt="profile" />
      </div>
    </section>
  )
}
