export default function Skills({items}){
  const data = items || {
    'Backend & Languages': ['Golang','Python (FastAPI, Django)','PHP (Laravel)','Node.js (Express.js)'],
    'Frontend & UI': ['Vue.js','React.js','Inertia.js','HTML5','CSS3','JavaScript'],
    'Databases': ['PostgreSQL','Microsoft SQL Server','MySQL','SQLite'],
    'Cloud & DevOps': ['AWS','Docker','Kubernetes','N8N','Git / GitLab'],
    'System Analysis & SDLC': ['PRD','SRS','URS','ERD Design','Wireframing','System Integration','Low-Code Optimization']
  }

  return (
    <div className="card">
      <h2>Skills</h2>
      {Object.entries(data).map(([cat, list]) => (
        <div key={cat} style={{marginTop:12}}>
          <strong>{cat}</strong>
          <div style={{marginTop:8}} className="skills">
            {list.map((s,i) => <div className="skill" key={i}>{s}</div>)}
          </div>
        </div>
      ))}
    </div>
  )
}
