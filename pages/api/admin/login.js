import { checkPassword, setSessionCookie } from '../../../lib/auth'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!process.env.ADMIN_PASSWORD) {
    return res.status(500).json({ error: 'ADMIN_PASSWORD belum di-set di environment.' })
  }
  if (!checkPassword(req.body?.password)) {
    // Perlambat percobaan tebak password.
    await new Promise(resolve => setTimeout(resolve, 1000))
    return res.status(401).json({ error: 'Password salah.' })
  }
  setSessionCookie(res)
  return res.status(200).json({ ok: true })
}
