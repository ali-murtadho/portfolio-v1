import { withAdmin } from '../../../lib/auth'
import { getContent, saveSection, PUBLIC_PATHS } from '../../../lib/content'

async function handler(req, res) {
  if (req.method === 'GET') {
    const content = await getContent()
    return res.status(200).json({
      content,
      databaseConfigured: Boolean(process.env.DATABASE_URL)
    })
  }

  if (req.method === 'PUT') {
    const { section, data } = req.body || {}
    if (!section || data === undefined) {
      return res.status(400).json({ error: 'Field "section" dan "data" wajib diisi.' })
    }
    try {
      await saveSection(section, data)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }

    // Render ulang halaman publik agar perubahan langsung tampil.
    const failed = []
    for (const path of PUBLIC_PATHS) {
      try {
        await res.revalidate(path)
      } catch (err) {
        failed.push(path)
      }
    }
    return res.status(200).json({ ok: true, revalidateFailed: failed })
  }

  res.setHeader('Allow', 'GET, PUT')
  return res.status(405).json({ error: 'Method not allowed' })
}

export default withAdmin(handler)
