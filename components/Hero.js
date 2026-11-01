export default function Hero({ profile }) {
  const { name, title, subtitle, summary, avatar, cvUrl } = profile

  return (
    <section className="hero">
      <div className="left">
        <p className="sub" style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 500 }}>
          👋 Hello, I&apos;m
        </p>
        <h1 className="headline">{name}</h1>
        <p className="sub">
          {title}{subtitle && <> &bull; {subtitle}</>}
        </p>
        <p className="hero-summary">{summary}</p>
        <div className="cta">
          {cvUrl && (
            <a className="btn btn-primary" href={cvUrl} target="_blank" rel="noreferrer">
              ↓ Download CV
            </a>
          )}
          <a className="btn btn-secondary" href="/contact">
            Get in Touch
          </a>
        </div>
      </div>

      {avatar && (
        <div className="right">
          <img className="avatar" src={avatar} alt={name} />
        </div>
      )}
    </section>
  )
}
