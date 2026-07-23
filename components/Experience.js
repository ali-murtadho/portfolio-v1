export default function Experience({ items }) {
  const data = items || [
    {
      range: 'Nov 2025 – Present',
      role: 'IT Business Application Developer',
      company: 'PT. Garudafood Putra Putri Jaya Tbk',
      location: 'Jakarta',
      logo: '/assets/icons/companies/garudafood.svg',
      desc: [
        'Developed and maintained enterprise internal web apps (Internal Audit tracking, HC Monitoring) using Laravel, Node.js, FastAPI, PostgreSQL, SQL Server, N8N, and AWS.',
        'Collaborated with Head of IT, HC, Internal Audit, and Internal Control to analyse requirements and deliver SDLC-aligned solutions.',
        'Prepared PRD, SRS, ERD and wireframes; managed deployment and containerization with Docker and Kubernetes.'
      ]
    },
    {
      range: 'Dec 2024 – Nov 2025',
      role: 'Backend Developer',
      company: 'PT Lawang Sewu Teknologi',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/lawangsewu.svg',
      desc: [
        'Designed and developed 3 backend enterprise projects with Golang and PostgreSQL: Soft Token app (banking), Government Payment (SIPD), School Management with payment gateway.',
        'Implemented encryption/decryption, debugging, low-code optimization, and collaborated with cross-functional teams.'
      ]
    },
    {
      range: 'Nov 2023 – Nov 2024',
      role: 'Full Stack Developer',
      company: 'PT Lawang Sewu Teknologi',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/lawangsewu.svg',
      desc: [
        'Built 5 full-stack web apps using PHP Laravel, Golang backend, and Vue.js frontend with auth, API integrations, dashboards and management modules.',
        'Used GitLab, implemented testing and performance optimizations.'
      ]
    },
    {
      range: 'Oct 2022 – Jan 2023',
      role: 'Web Developer Intern',
      company: 'PT Kereta Api Indonesia (Persero) DAOP 5',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/kai.svg',
      desc: [
        'Co-developed an operational web app for tracking train departure performance using PHP and MySQL.',
        'Performed unit and black-box testing (100% test success) and deployed 3 customized station applications.'
      ]
    }
  ]

  return (
    <div className="card">
      <div className="section-title">
        <div className="icon">💼</div>
        <h2>Experience</h2>
      </div>
      <div className="timeline">
        {data.map((it, i) => (
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
              <p className="company">{it.company} &mdash; {it.location}</p>
              {it.desc.map((d, j) => <p key={j}>{d}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
