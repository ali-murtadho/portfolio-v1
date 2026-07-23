import Head from 'next/head'
import Layout from '../components/Layout'

const projects = [
  {
    title: 'Finance Personal Assistant LLM',
    desc: 'Multi-agent LLM-based financial assistant built with FastAPI and OpenAI integrations for expense analysis, budgeting, and financial recommendations. Backend uses Pydantic for validation.',
    icon: '/assets/icons/projects/finance-llm.svg',
    tags: ['FastAPI', 'Python', 'OpenAI', 'Pydantic'],
    links: [
      { label: 'Repository', url: 'https://github.com/ali-murtadho/LLM-Finance-Assistant' }
    ]
  },
  {
    title: 'Finance Management App',
    desc: 'Interactive frontend app (React / Inertia) and scalable backend (Golang) for personal finance tracking. Implements role-based auth and microservice patterns.',
    icon: '/assets/icons/projects/finance-app.svg',
    tags: ['React', 'Inertia.js', 'Golang', 'Microservices'],
    links: [
      { label: 'Frontend', url: 'https://github.com/ali-murtadho/react-frontend-manajemen-keuangan/tree/dev-bs' },
      { label: 'Backend', url: 'https://github.com/ali-murtadho/go-backend-manajemen-keuangan' }
    ]
  },
  {
    title: 'Blog Backend RESTful API',
    desc: 'High-performance RESTful API using Golang Gin framework. Features JWT authentication, role-based access control, and auto-generated Swagger API documentation.',
    icon: '/assets/icons/projects/blog-api.svg',
    tags: ['Golang', 'Gin', 'JWT', 'Swagger', 'PostgreSQL'],
    links: [
      { label: 'Repository', url: 'https://github.com/ali-murtadho/Blogs-Project-Backend-App' }
    ]
  },
  {
    title: 'Klasifikasi Kualitas Padi Organik (wkpo-app-v2)',
    desc: 'Agricultural information system using Python Django and Scikit-Learn (C4.5 Decision Tree) for classifying organic rice quality. Features data visualization and model accuracy metrics.',
    icon: '/assets/icons/projects/wkpo.svg',
    tags: ['Python', 'Django', 'Scikit-Learn', 'Machine Learning'],
    links: [
      { label: 'Repository', url: 'https://github.com/ali-murtadho/wkpo-app-v2' }
    ]
  }
]

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects — Ali Murtadho</title>
        <meta name="description" content="Projects by Ali Murtadho" />
      </Head>

      <main>
        <div className="page-header">
          <h1>Projects</h1>
          <p>A selection of personal and professional projects I&apos;ve built</p>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <div className="project-list-item" key={i}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                {project.icon && (
                  <img src={project.icon} alt="" style={{ width: 48, height: 48, borderRadius: 10, flexShrink: 0 }} />
                )}
                <div style={{ flex: 1 }}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tags">
                    {project.tags.map((tag, j) => (
                      <span className="tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <div className="links">
                    {project.links.map((link, j) => (
                      <a key={j} href={link.url} target="_blank" rel="noreferrer">
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
