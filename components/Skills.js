const skillIcons = {
  'Golang': '/assets/icons/skills/golang.svg',
  'Python (FastAPI)': '/assets/icons/skills/python.svg',
  'PHP (Laravel)': '/assets/icons/skills/laravel.svg',
  'Node.js (Express)': '/assets/icons/skills/nodejs.svg',
  'Vue.js': '/assets/icons/skills/vuejs.svg',
  'React.js': '/assets/icons/skills/react.svg',
  'JavaScript': '/assets/icons/skills/javascript.svg',
  'PostgreSQL': '/assets/icons/skills/postgresql.svg',
  'MySQL': '/assets/icons/skills/mysql.svg',
  'SQL Server': '/assets/icons/skills/mysql.svg',
  'Docker': '/assets/icons/skills/docker.svg',
  'Kubernetes': '/assets/icons/skills/kubernetes.svg',
  'AWS': '/assets/icons/skills/aws.svg',
  'Git / GitLab': '/assets/icons/skills/git.svg',
}

export default function Skills({ items }) {
  const data = items || {
    'Backend & Languages': ['Golang', 'Python (FastAPI)', 'PHP (Laravel)', 'Node.js (Express)'],
    'Frontend & UI': ['Vue.js', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Inertia.js'],
    'Databases': ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'N8N', 'Git / GitLab'],
    'System Analysis': ['PRD', 'SRS', 'ERD Design', 'Wireframing', 'System Integration']
  }

  return (
    <div className="card">
      <div className="section-title">
        <div className="icon">⚡</div>
        <h2>Skills</h2>
      </div>
      <div className="skills-section">
        {Object.entries(data).map(([cat, list]) => (
          <div key={cat} className="skills-category">
            <div className="skills-category-label">{cat}</div>
            <div className="skills">
              {list.map((s, i) => (
                <span className="skill" key={i}>
                  {skillIcons[s] && (
                    <img
                      src={skillIcons[s]}
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
