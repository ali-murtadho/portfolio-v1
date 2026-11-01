import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import { getContentProps } from '../lib/content'

export const getStaticProps = getContentProps

export default function Home({ content }) {
  const { profile, experience, skills, skillIcons, categories, projects, contacts, education } = content
  const [activeCategory, setActiveCategory] = useState('all')

  const featuredProjects = projects.filter(p => p.featured)
  const filteredProjects = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeCategory)

  // Hanya tampilkan kategori yang punya proyek unggulan.
  const usedCategories = categories.filter(c => featuredProjects.some(p => p.category === c.id))
  const filterOptions = [{ id: 'all', name: 'All' }, ...usedCategories]

  return (
    <Layout profile={profile}>
      <Head>
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={`Portfolio of ${profile.name} — ${profile.title}`} />
        <meta property="og:image" content="/assets/og-image.svg" />
      </Head>

      <main>
        <Hero profile={profile} />

        <div className="main-grid">
          <div className="main-content">
            {experience.length > 0 && (
              <section>
                <Experience items={experience} />
              </section>
            )}

            {featuredProjects.length > 0 && (
              <section>
                <div className="card">
                  <div className="section-title" style={{ marginBottom: 16 }}>
                    <div className="icon">🚀</div>
                    <h2>Featured Projects</h2>
                  </div>

                  <div className="project-filter-container">
                    {filterOptions.map(category => (
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
                        desc={project.shortDesc || project.desc}
                        img={project.img}
                        tags={project.tags}
                        link={project.links?.[0]?.url}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>

          <aside className="sidebar">
            <Skills items={skills} icons={skillIcons} />

            <div className="card">
              <div className="section-title">
                <div className="icon">📬</div>
                <h2>Contact</h2>
              </div>
              <div className="contact-card">
                {contacts.filter(c => c.showOnHome).map((c, i) => (
                  <div className="contact-item" key={i}>
                    <div className="contact-icon">{c.icon}</div>
                    <a href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
                  </div>
                ))}
                {profile.location && (
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <span>{profile.location}</span>
                  </div>
                )}
              </div>
            </div>

            {education.length > 0 && (
              <div className="card">
                <div className="section-title">
                  <div className="icon">🎓</div>
                  <h2>Education</h2>
                </div>
                {education.map((edu, i) => (
                  <div key={i} style={{ marginTop: i > 0 ? 14 : 0 }}>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px' }}>{edu.school}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '0 0 4px' }}>
                      {edu.degree}
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
                      {edu.period}{edu.gpa && <> &bull; GPA: {edu.gpa}</>}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>
    </Layout>
  )
}
