import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ali Murtadho — Frontend Engineer</title>
        <meta name="description" content="Portfolio — Ali Murtadho, Frontend Engineer" />
        <meta property="og:image" content="/assets/og-image.svg" />
      </Head>
      <Header />

      <main>
        <Hero name="Ali Murtadho" title="Frontend Engineer" summary="Product-minded frontend engineer building fast, accessible web apps. Open to remote and hybrid roles." />

        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:20,marginTop:20}}>
          <div>
            <section className="card">
              <h2>Summary</h2>
              <p style={{color:'var(--muted)'}}>Product-minded frontend engineer focused on building fast, accessible, and maintainable web applications. Contact: <a href="mailto:alimurtadho1620@gmail.com">alimurtadho1620@gmail.com</a></p>
            </section>

            <section style={{marginTop:18}}>
              <Experience />
            </section>

            <section style={{marginTop:18}}>
              <h2>Projects</h2>
              <div className="projects-grid">
                <ProjectCard title="Blogs-Project-Backend-App" desc="Backend for Blogs project (GitHub)." img="/assets/project-1.svg" />
                <ProjectCard title="wkpo-app-v2" desc="Web application (frontend repo)." img="/assets/project-2.svg" />
              </div>
            </section>
          </div>

          <aside>
            <Skills />

            <section className="card" style={{marginTop:16}}>
              <h3>Contact</h3>
              <p style={{color:'var(--muted)'}}>Email: <a href="mailto:alimurtadho1620@gmail.com">alimurtadho1620@gmail.com</a></p>
              <p style={{color:'var(--muted)'}}>GitHub: <a href="https://github.com/ali-murtadho" target="_blank" rel="noreferrer">ali-murtadho</a></p>
              <p style={{color:'var(--muted)'}}>Location: Indonesia</p>
            </section>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
