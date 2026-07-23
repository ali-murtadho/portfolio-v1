export default function ProjectCard({ title, desc, img, tags, link }) {
  return (
    <div className="card project-card">
      {img && (
        <div style={{ marginBottom: 14 }}>
          <img src={img} alt={title} style={{ width: '100%', height: 120, objectFit: 'contain', borderRadius: 8, background: 'var(--bg-alt)', padding: 12 }} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{desc}</p>
      {tags && (
        <div className="project-tags">
          {tags.map((tag, i) => <span className="project-tag" key={i}>{tag}</span>)}
        </div>
      )}
      {link && (
        <div className="project-links">
          <a href={link} target="_blank" rel="noreferrer">View Repository →</a>
        </div>
      )}
    </div>
  )
}
