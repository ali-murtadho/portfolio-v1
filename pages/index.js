import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ali Murtadho — Software Engineer</title>
        <meta name="description" content="Portfolio of Ali Murtadho — Software Engineer & System Analyst" />
        <meta property="og:image" content="/assets/og-image.svg" />
      </Head>

      <main>
        <Hero />

        <div className="main-grid">
          <div className="main-content">
            <section>
              <Experience />
            </section>

            <section>
              <div className="card">
                <div className="section-title">
                  <div className="icon">🚀</div>
                  <h2>Featured Projects</h2>
                </div>
                <div className="projects-grid">
                  <ProjectCard
                    title="Finance Personal Assistant"
                    desc="Multi-agent LLM-based financial assistant with FastAPI and OpenAI."
                    img="/assets/icons/projects/finance-llm.svg"
                    tags={['FastAPI', 'Python', 'OpenAI']}
                    link="https://github.com/ali-murtadho/LLM-Finance-Assistant"
                  />
                  <ProjectCard
                    title="Blog Backend API"
                    desc="High-performance RESTful API with Golang Gin, JWT auth, and Swagger docs."
                    img="/assets/icons/projects/blog-api.svg"
                    tags={['Golang', 'Gin', 'PostgreSQL']}
                    link="https://github.com/ali-murtadho/Blogs-Project-Backend-App"
                  />
                </div>
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <Skills />

            <div className="card">
              <div className="section-title">
                <div className="icon">📬</div>
                <h2>Contact</h2>
              </div>
              <div className="contact-card">
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <a href="mailto:alimurtadho1620@gmail.com">alimurtadho1620@gmail.com</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⌨</div>
                  <a href="https://github.com/ali-murtadho" target="_blank" rel="noreferrer">github.com/ali-murtadho</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <a href="https://linkedin.com/in/alimurtadho" target="_blank" rel="noreferrer">linkedin.com/in/alimurtadho</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <span>Indonesia</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="section-title">
                <div className="icon">🎓</div>
                <h2>Education</h2>
              </div>
              <h4 style={{ margin: '0 0 4px', fontSize: '14px' }}>Jenderal Soedirman University</h4>
              <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '0 0 4px' }}>
                B.Sc. Computer Science / Informatics
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
                2020 – 2024 &bull; GPA: 3.71 / 4.00
              </p>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
