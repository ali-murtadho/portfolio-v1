export default function Skills({ items = [], icons = [] }) {
  const iconMap = Object.fromEntries(icons.map(i => [i.name, i.icon]))

  return (
    <div className="card">
      <div className="section-title">
        <div className="icon">⚡</div>
        <h2>Skills</h2>
      </div>
      <div className="skills-section">
        {items.map((group, i) => (
          <div key={i} className="skills-category">
            <div className="skills-category-label">{group.category}</div>
            <div className="skills">
              {(group.items || []).map((s, j) => (
                <span className="skill" key={j}>
                  {iconMap[s] && (
                    <img
                      src={iconMap[s]}
                      alt=""
                      style={{ width: 16, height: 16, borderRadius: 3, verticalAlign: 'middle', marginRight: 4 }}
                    />
                  )}
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
