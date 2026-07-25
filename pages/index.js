import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'backend', name: 'Backend' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'ml', name: 'Machine Learning' }
]

const FEATURED_PROJECTS = [
  {
    title: "Finance Management App",
    desc: "Interactive personal finance tracking app using React, Inertia, and Golang backend.",
    img: "/assets/icons/projects/finance-app.svg",
    tags: ['React', 'Golang', 'Inertia.js', 'PostgreSQL'],
    link: "https://github.com/ali-murtadho/go-backend-manajemen-keuangan",
    category: 'fullstack'
  },
  {
    title: "Finance Personal Assistant",
    desc: "Multi-agent LLM-based financial assistant with FastAPI and OpenAI integrations.",
    img: "/assets/icons/projects/finance-llm.svg",
    tags: ['FastAPI', 'Python', 'OpenAI', 'LLM'],
    link: "https://github.com/ali-murtadho/LLM-Finance-Assistant",
    category: 'ml'
  },
  {
    title: "Blog Backend API",
    desc: "High-performance RESTful API with Golang Gin, JWT auth, and Swagger docs.",
    img: "/assets/icons/projects/blog-api.svg",
    tags: ['Golang', 'Gin', 'PostgreSQL', 'Swagger'],
    link: "https://github.com/ali-murtadho/Blogs-Project-Backend-App",
    category: 'backend'
  },
  {
    title: "Portfolio Frontend v2",
    desc: "Interactive and responsive portfolio UI built with React and Next.js.",
    img: "/assets/icons/projects/portfolio-fe.svg",
    tags: ['React', 'Next.js', 'CSS Modules'],
    link: "https://github.com/ali-murtadho/portfolio-fe-v2",
    category: 'frontend'
  },
  {
    title: "Klasifikasi Kualitas Padi",
    desc: "Decision Tree model built with Django and Scikit-Learn using C4.5 algorithm.",
    img: "/assets/icons/projects/wkpo.svg",
    tags: ['Python', 'Django', 'Scikit-Learn', 'ML'],
    link: "https://github.com/ali-murtadho/wkpo-app-v2",
    category: 'ml'
  }
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory)

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
                <div className="section-title" style={{ marginBottom: 16 }}>
                  <div className="icon">🚀</div>
                  <h2>Featured Projects</h2>
                </div>

                <div className="project-filter-container">
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      className={`project-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="projects-grid">
                  {filteredProjects.map((project, i) => (
                    <ProjectCard
                      key={i}
                      title={project.title}
                      desc={project.desc}
                      img={project.img}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
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
