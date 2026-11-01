import Head from 'next/head'
import Layout from '../components/Layout'
import { getContentProps } from '../lib/content'

export const getStaticProps = getContentProps

export default function About({ content }) {
  const { profile, education, certifications, achievements, organizations } = content

  return (
    <Layout profile={profile}>
      <Head>
        <title>{`About — ${profile.name}`}</title>
        <meta name="description" content={`About ${profile.name} — ${profile.aboutTagline}`} />
      </Head>

      <main>
        <div className="page-header">
          <h1>About Me</h1>
          <p>{profile.aboutTagline}</p>
        </div>

        <div className="about-content">
          {(profile.aboutParagraphs || []).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {education.length > 0 && (
          <section style={{ marginTop: 36 }}>
            <div className="section-title">
              <div className="icon">🎓</div>
              <h2>Education</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {education.map((edu, i) => (
                <div className="card" key={i}>
                  <h3 style={{ margin: '0 0 4px' }}>{edu.school}</h3>
                  <p style={{ color: 'var(--muted)', margin: '0 0 4px', fontSize: '14px' }}>
                    {edu.degree}{edu.period && <> &bull; {edu.period}</>}
                  </p>
                  {edu.gpa && (
                    <p style={{ color: 'var(--text-secondary)', margin: '0 0 8px', fontSize: '14px' }}>
                      GPA: {edu.gpa}
                    </p>
                  )}
                  {edu.note && (
                    <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {certifications.length > 0 && (
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
        )}

        {achievements.length > 0 && (
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
        )}

        {organizations.length > 0 && (
          <section style={{ marginTop: 36 }}>
            <div className="section-title">
              <div className="icon">🤝</div>
              <h2>Leadership & Organizations</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {organizations.map((org, i) => (
                <div className="card" key={i}>
                  <h3 style={{ margin: '0 0 4px' }}>{org.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '0 0 8px' }}>
                    {org.role}{org.period && <> &bull; {org.period}</>}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>{org.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
