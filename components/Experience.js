export default function Experience({ items = [] }) {
  return (
    <div className="card">
      <div className="section-title">
        <div className="icon">💼</div>
        <h2>Experience</h2>
      </div>
      <div className="timeline">
        {items.map((it, i) => (
          <div className="timeline-item" key={i}>
            <div className="meta">
              {it.logo && (
                <img
                  src={it.logo}
                  alt={it.company}
                  style={{ width: 32, height: 32, borderRadius: 6, marginBottom: 6, display: 'block' }}
                />
              )}
              <span>{it.range}</span>
            </div>
            <div className="body">
              <h4>{it.role}</h4>
              <p className="company">
                {it.company}{it.location && <> &mdash; {it.location}</>}
              </p>
              {(it.desc || []).map((d, j) => <p key={j}>{d}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
