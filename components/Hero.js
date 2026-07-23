export default function Hero({ name = 'Ali Murtadho', title = 'Software Engineer', summary }) {
  return (
    <section className="hero">
      <div className="left">
        <p className="sub" style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 500 }}>
          👋 Hello, I&apos;m
        </p>
        <h1 className="headline">{name}</h1>
        <p className="sub">{title} &bull; System Analyst</p>
        <p className="hero-summary">
          {summary || 'Building scalable enterprise applications across finance, government, and corporate systems. Experienced with Golang, Laravel, FastAPI, Node.js, and modern frontend frameworks.'}
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="/assets/CV_Ali-Murtadho_June_2026.pdf" target="_blank" rel="noreferrer">
            ↓ Download CV
          </a>
          <a className="btn btn-secondary" href="/contact">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="right">
        <img className="avatar" src="/assets/profile.svg" alt="Ali Murtadho" />
      </div>
    </section>
  )
}
