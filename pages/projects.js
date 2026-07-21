import Head from 'next/head'
import Layout from '../components/Layout'

export default function Projects(){
  return (
    <Layout>
      <Head>
        <title>Projects — Ali Murtadho</title>
        <meta name="description" content="Projects by Ali Murtadho" />
      </Head>

      <main>
        <h1>Projects</h1>
        <article>
          <h3>Finance Personal Assistant LLM</h3>
          <p style={{color:'var(--muted)'}}>Multi-agent LLM-based financial assistant built with <strong>FastAPI</strong> and OpenAI integrations for expense analysis, budgeting, and financial recommendations. Backend uses Pydantic for validation. <a href="https://github.com/ali-murtadho/LLM-Finance-Assistant" target="_blank" rel="noreferrer">Repository</a></p>
        </article>

        <article style={{marginTop:20}}>
          <h3>Aplikasi Manajemen Keuangan (Finance Management App)</h3>
          <p style={{color:'var(--muted)'}}>Interactive frontend app (React / Inertia) and scalable backend (Golang) for personal finance tracking. Implements role-based auth and microservice patterns. <a href="https://github.com/ali-murtadho/react-frontend-manajemen-keuangan/tree/dev-bs" target="_blank" rel="noreferrer">Frontend</a> · <a href="https://github.com/ali-murtadho/go-backend-manajemen-keuangan" target="_blank" rel="noreferrer">Backend</a></p>
        </article>

        <article style={{marginTop:20}}>
          <h3>Aplikasi Backend RESTful API Website Blog</h3>
          <p style={{color:'var(--muted)'}}>High-performance RESTful API using <strong>Golang Gin</strong>. Features JWT auth, role-based access, and Swagger API docs. <a href="https://github.com/ali-murtadho/Blogs-Project-Backend-App" target="_blank" rel="noreferrer">Repository</a></p>
        </article>

        <article style={{marginTop:20}}>
          <h3>Sistem Informasi Klasifikasi Kualitas Padi Organik (wkpo-app-v2)</h3>
          <p style={{color:'var(--muted)'}}>Agricultural information system using <strong>Python Django</strong> and Scikit-Learn (C4.5) for classifying organic rice quality. <a href="https://github.com/ali-murtadho/wkpo-app-v2" target="_blank" rel="noreferrer">Repository</a></p>
        </article>
      </main>
    </Layout>
  )
}
