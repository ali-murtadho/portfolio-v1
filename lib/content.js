import defaultContent, { SECTION_KEYS } from '../data/defaultContent'
import { ensureTable } from './db'

// Halaman publik yang perlu di-render ulang setelah konten disimpan.
export const PUBLIC_PATHS = ['/', '/about', '/projects', '/contact']

// Ambil semua konten: data dari database menimpa konten default per bagian.
// Kalau database belum dikonfigurasi atau gagal diakses, konten default dipakai
// supaya situs tetap tampil.
export async function getContent() {
  const content = JSON.parse(JSON.stringify(defaultContent))
  try {
    const pool = await ensureTable()
    if (!pool) return content
    const { rows } = await pool.query('SELECT key, data FROM site_content')
    for (const row of rows) {
      if (!SECTION_KEYS.includes(row.key)) continue
      content[row.key] = row.key === 'profile'
        ? { ...content.profile, ...row.data }
        : row.data
    }
  } catch (err) {
    console.error('[content] Gagal membaca database, memakai konten default:', err.message)
  }
  return content
}

export async function saveSection(key, data) {
  if (!SECTION_KEYS.includes(key)) {
    throw new Error(`Bagian tidak dikenal: ${key}`)
  }
  const pool = await ensureTable()
  if (!pool) {
    throw new Error('DATABASE_URL belum di-set, konten tidak bisa disimpan.')
  }
  await pool.query(
    `INSERT INTO site_content (key, data, updated_at)
     VALUES ($1, $2::jsonb, NOW())
     ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()`,
    [key, JSON.stringify(data)]
  )
}

// Props standar untuk getStaticProps di halaman publik.
export async function getContentProps() {
  return {
    props: { content: await getContent() },
    revalidate: 60
  }
}
