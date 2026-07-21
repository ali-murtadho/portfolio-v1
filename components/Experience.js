export default function Experience({items}){
  const data = items || [
    {
      range: 'November 2025 – Present',
      role: 'IT Business Application Developer',
      company: 'PT. Garudafood Putra Putri Jaya Tbk — Jakarta',
      desc: [
        'Developed and maintained enterprise internal web apps (Internal Audit tracking, HC Monitoring) using Laravel, Node.js (Express), FastAPI, PostgreSQL, SQL Server, N8N, and AWS.',
        'Collaborated with Head of IT, HC, Internal Audit, and Internal Control to analyse requirements and deliver SDLC-aligned solutions.',
        'Prepared PRD, SRS, ERD and wireframes; managed deployment and containerization with Docker and Kubernetes.'
      ]
    },
    {
      range: 'December 2024 – November 2025',
      role: 'Backend Developer',
      company: 'PT Lawang Sewu Teknologi — Purwokerto',
      desc: [
        'Designed and developed 3 backend enterprise projects with Golang and PostgreSQL: Soft Token app (banking), Government Payment (SIPD) with gateway, School Management with payment gateway.',
        'Implemented encryption/decryption, debugging, low-code optimization, and collaborated with cross-functional teams.'
      ]
    },
    {
      range: 'November 2023 – November 2024',
      role: 'Full Stack Developer',
      company: 'PT Lawang Sewu Teknologi — Purwokerto',
      desc: [
        'Built 5 full-stack web apps using PHP Laravel, Golang backend, and Vue.js frontend; features included auth, API integrations, dashboards and management modules.',
        'Used GitLab, implemented testing and performance optimizations.'
      ]
    },
    {
      range: 'October 2022 – January 2023',
      role: 'Web Developer Internship',
      company: 'PT Kereta Api Indonesia (Persero) DAOP 5 — Purwokerto',
      desc: [
        'Co-developed an operational web app for tracking train departure performance using PHP and MySQL.',
        'Performed unit and black-box testing (100% test success) and deployed 3 customized station applications.'
      ]
    }
  ]

  return (
    <div className="card">
      <h2>Experience</h2>
      <div className="timeline">
        {data.map((it, i)=> (
          <div className="timeline-item" key={i}>
            <div className="meta">{it.range}</div>
            <div className="body">
              <h4>{it.role} — {it.company}</h4>
              {it.desc.map((d, j) => <p key={j} style={{margin:'6px 0',color:'var(--muted)'}}>{d}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
