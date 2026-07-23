import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  const certifications = [
    { title: 'Scalable Web Service with Golang', org: 'Kominfo x Hacktiv8', date: 'Mar 2024' },
    { title: 'Machine Learning & Data Mining', org: 'Digital Talent Scholarship', date: 'Apr 2023' },
    { title: 'AWS Cloud Foundations & Architecting', org: 'AWS Academy', date: '2023' },
    { title: 'TOEFL English Proficiency', org: 'Certified', date: 'Dec 2024' },
  ]

  const achievements = [
    { title: '2nd Place (Silver) — Data Mining', org: 'HIMTIKA Unsika', year: '2022' },
    { title: '2nd Place — Student Scientific Creativity', org: 'BEM Unsoed', year: '2022' },
    { title: 'Bronze Medal — National Olympiad (Computer)', org: 'POSI', year: '2021' },
  ]

  return (
    <Layout>
      <Head>
        <title>About — Ali Murtadho</title>
        <meta name="description" content="About Ali Murtadho — Software Engineer & System Analyst" />
      </Head>

      <main>
        <div className="page-header">
          <h1>About Me</h1>
          <p>Software Engineer & System Analyst based in Indonesia</p>
        </div>

        <div className="about-content">
          <p>
            Software Engineer and System Analyst with experience designing, developing, and maintaining
            scalable enterprise applications across finance, government payment, corporate, and school
            management systems. Skilled in backend and full-stack development with Golang, Laravel,
            FastAPI, Node.js, PostgreSQL, and Vue.js.
          </p>
          <p>
            Experienced with RESTful APIs, system integration, cloud deployment (AWS), Docker, and
            Kubernetes. Strong in SDLC, PRD/SRS preparation, ERD and wireframing, and translating
            business needs into technical solutions.
          </p>
        </div>

        <section style={{ marginTop: 36 }}>
          <div className="section-title">
            <div className="icon">🎓</div>
            <h2>Education</h2>
          </div>
          <div className="card">
            <h3 style={{ margin: '0 0 4px' }}>Jenderal Soedirman University (UNSOED)</h3>
            <p style={{ color: 'var(--muted)', margin: '0 0 4px', fontSize: '14px' }}>
              Bachelor of Computer Science / Informatics (S1) &bull; 2020 – 2024
            </p>
            <p style={{ color: 'var(--text-secondary)', margin: '0 0 8px', fontSize: '14px' }}>
              GPA: 3.71 / 4.00
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
              Selected as University Representative at 2022 Gemastik (Data Mining).
            </p>
          </div>
        </section>

        <section style={{ marginTop: 36 }}>
          <div className="section-title">
            <div className="icon">📜</div>
            <h2>Certifications</h2>
          </div>
          <div className="about-grid">
            {certifications.map((cert, i) => (
              <div className="cert-item" key={i}>
                <h4>{cert.title}</h4>
                <p>{cert.org} &bull; {cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 36 }}>
          <div className="section-title">
            <div className="icon">🏆</div>
            <h2>Achievements</h2>
          </div>
          <div className="about-grid">
            {achievements.map((item, i) => (
              <div className="achievement-item" key={i}>
                <h4>{item.title}</h4>
                <p>{item.org} &bull; {item.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 36 }}>
          <div className="section-title">
            <div className="icon">🤝</div>
            <h2>Leadership & Organizations</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="card">
              <h3 style={{ margin: '0 0 4px' }}>BEM Fakultas Teknik Unsoed</h3>
              <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '0 0 8px' }}>
                Research & Technology Division &bull; Feb 2022 – Nov 2022
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
                Led research initiatives, organized Research Essay Contest (189% increase in participation),
                and mentored students on academic writing & PKM proposals.
              </p>
            </div>
            <div className="card">
              <h3 style={{ margin: '0 0 4px' }}>Indonesia AI</h3>
              <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '0 0 8px' }}>
                Data Science R&D Staff &bull; Dec 2021 – May 2022
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
                Researched Data Science topics, co-organized a national webinar (190+ participants),
                and established partnerships with media and speakers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
