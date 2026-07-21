import Head from 'next/head'
import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <Head>
        <title>Contact — Ali Murtadho</title>
        <meta name="description" content="Contact information" />
      </Head>

      <main>
        <h1>Contact</h1>
        <p>Email: <a href="mailto:alimurtadho1620@gmail.com">alimurtadho1620@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/ali-murtadho" target="_blank" rel="noreferrer">ali-murtadho</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/alimurtadho" target="_blank" rel="noreferrer">/in/alimurtadho</a></p>
        <p>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=6287874881600&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">+62 878-7488-1600</a></p>
      </main>
    </Layout>
  )
}
