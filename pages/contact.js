import Head from 'next/head'
import Layout from '../components/Layout'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'alimurtadho1620@gmail.com', href: 'mailto:alimurtadho1620@gmail.com' },
  { icon: '💻', label: 'GitHub', value: 'ali-murtadho', href: 'https://github.com/ali-murtadho' },
  { icon: '🔗', label: 'LinkedIn', value: '/in/alimurtadho', href: 'https://linkedin.com/in/alimurtadho' },
  { icon: '📱', label: 'WhatsApp', value: '+62 878-7488-1600', href: 'https://api.whatsapp.com/send/?phone=6287874881600&text&type=phone_number&app_absent=0' },
]

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact — Ali Murtadho</title>
        <meta name="description" content="Get in touch with Ali Murtadho" />
      </Head>

      <main>
        <div className="page-header">
          <h1>Get in Touch</h1>
          <p>Feel free to reach out for collaboration, opportunities, or just to say hello.</p>
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

        <section style={{ marginTop: 40 }}>
          <div className="card" style={{ maxWidth: 600 }}>
            <h3 style={{ margin: '0 0 12px' }}>Open to Opportunities</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
              I&apos;m currently open to full-time, contract, and freelance opportunities.
              Especially interested in roles involving backend development, system architecture,
              and enterprise application development. Available for remote and hybrid work arrangements.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
