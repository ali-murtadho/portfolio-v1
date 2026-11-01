import Head from 'next/head'
import Layout from '../components/Layout'
import { getContentProps } from '../lib/content'

export const getStaticProps = getContentProps

export default function Contact({ content }) {
  const { profile, contacts } = content

  return (
    <Layout profile={profile}>
      <Head>
        <title>{`Contact — ${profile.name}`}</title>
        <meta name="description" content={`Get in touch with ${profile.name}`} />
      </Head>

      <main>
        <div className="page-header">
          <h1>Get in Touch</h1>
          <p>{profile.contactIntro}</p>
        </div>

        <div className="contact-grid">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h4>{item.label}</h4>
                <p style={{ margin: 0 }}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {profile.opportunitiesText && (
          <section style={{ marginTop: 40 }}>
            <div className="card" style={{ maxWidth: 600 }}>
              <h3 style={{ margin: '0 0 12px' }}>{profile.opportunitiesTitle}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                {profile.opportunitiesText}
              </p>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
