import Head from 'next/head'
import Layout from '../components/Layout'
import { getContentProps } from '../lib/content'

export const getStaticProps = getContentProps

export default function Projects({ content }) {
  const { profile, projects } = content

  return (
    <Layout profile={profile}>
      <Head>
        <title>{`Projects — ${profile.name}`}</title>
        <meta name="description" content={`Projects by ${profile.name}`} />
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
                {project.img && (
                  <img src={project.img} alt="" style={{ width: 48, height: 48, borderRadius: 10, flexShrink: 0 }} />
                )}
                <div style={{ flex: 1 }}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tags">
                    {(project.tags || []).map((tag, j) => (
                      <span className="tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <div className="links">
                    {(project.links || []).map((link, j) => (
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
