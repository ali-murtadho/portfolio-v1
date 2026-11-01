import { useEffect, useState } from 'react'
import Head from 'next/head'
import ThemeToggle from '../../components/ThemeToggle'
import { ObjectEditor, ListEditor } from '../../components/admin/FormFields'
import sections from '../../lib/adminSchema'

const clone = v => JSON.parse(JSON.stringify(v))

function LoginForm({ onLoggedIn }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    setLoading(false)
    if (res.ok) return onLoggedIn()
    const body = await res.json().catch(() => ({}))
    setError(body.error || 'Login gagal.')
  }

  return (
    <div className="admin-login">
      <form className="card" onSubmit={submit}>
        <h2 style={{ marginTop: 0 }}>Admin Panel</h2>
        <label className="admin-label">Password</label>
        <input
          className="admin-input"
          type="password"
          value={password}
          autoFocus
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="admin-error">{error}</p>}
        <button className="btn btn-primary" style={{ marginTop: 16, width: '100%' }} disabled={loading}>
          {loading ? 'Memproses…' : 'Masuk'}
        </button>
      </form>
    </div>
  )
}

export default function Admin() {
  const [status, setStatus] = useState('loading') // loading | login | ready
  const [saved, setSaved] = useState(null)
  const [draft, setDraft] = useState(null)
  const [dbConfigured, setDbConfigured] = useState(true)
  const [active, setActive] = useState(sections[0].key)
  const [editorVersion, setEditorVersion] = useState(0)
  const [message, setMessage] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = async () => {
    const res = await fetch('/api/admin/content')
    if (res.status === 401) return setStatus('login')
    const body = await res.json()
    setSaved(body.content)
    setDraft(clone(body.content))
    setDbConfigured(body.databaseConfigured)
    setStatus('ready')
  }

  useEffect(() => { load() }, [])

  const isDirty = key => draft && saved && JSON.stringify(draft[key]) !== JSON.stringify(saved[key])
  const anyDirty = draft && sections.some(s => isDirty(s.key))

  useEffect(() => {
    const warn = e => { if (anyDirty) { e.preventDefault(); e.returnValue = '' } }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [anyDirty])

  const section = sections.find(s => s.key === active)

  const save = async () => {
    setSaving(true)
    setMessage(null)
    const res = await fetch('/api/admin/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: active, data: draft[active] })
    })
    setSaving(false)
    const body = await res.json().catch(() => ({}))
    if (res.status === 401) return setStatus('login')
    if (!res.ok) return setMessage({ type: 'error', text: body.error || 'Gagal menyimpan.' })
    setSaved(prev => ({ ...prev, [active]: clone(draft[active]) }))
    setMessage({
      type: 'success',
      text: body.revalidateFailed?.length
        ? `Tersimpan, tapi halaman ${body.revalidateFailed.join(', ')} gagal diperbarui (akan diperbarui otomatis dalam 1 menit).`
        : `${section.label} tersimpan dan website sudah diperbarui.`
    })
  }

  const reset = () => {
    setDraft(prev => ({ ...prev, [active]: clone(saved[active]) }))
    setEditorVersion(v => v + 1)
    setMessage(null)
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    setStatus('login')
  }

  const switchSection = key => {
    setActive(key)
    setMessage(null)
  }

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <header>
        <div className="nav-inner">
          <span className="nav-brand">Admin</span>
          <nav>
            <a href="/" target="_blank" rel="noreferrer">Lihat website ↗</a>
            {status === 'ready' && <a href="#" onClick={e => { e.preventDefault(); logout() }}>Keluar</a>}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="container">
        {status === 'loading' && <p>Memuat…</p>}
        {status === 'login' && <LoginForm onLoggedIn={load} />}

        {status === 'ready' && (
          <>
            {!dbConfigured && (
              <div className="admin-alert">
                <strong>DATABASE_URL belum di-set.</strong> Konten yang tampil adalah konten default dan
                belum bisa disimpan. Tambahkan DATABASE_URL di file .env.local atau di pengaturan Vercel.
              </div>
            )}

            <div className="admin-layout">
              <aside className="admin-sidebar card">
                {sections.map(s => (
                  <button
                    key={s.key}
                    type="button"
                    className={`admin-tab ${active === s.key ? 'active' : ''}`}
                    onClick={() => switchSection(s.key)}
                  >
                    {s.label}
                    {isDirty(s.key) && <span className="admin-dot" title="Ada perubahan belum disimpan" />}
                  </button>
                ))}
              </aside>

              <section className="admin-main card">
                <div className="admin-main-head">
                  <h2>{section.label}</h2>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button type="button" className="btn btn-secondary" disabled={!isDirty(active) || saving} onClick={reset}>
                      Batalkan
                    </button>
                    <button type="button" className="btn btn-primary" disabled={!isDirty(active) || saving || !dbConfigured} onClick={save}>
                      {saving ? 'Menyimpan…' : 'Simpan'}
                    </button>
                  </div>
                </div>

                {message && <div className={`admin-message ${message.type}`}>{message.text}</div>}

                <div key={`${active}-${editorVersion}`}>
                  {section.type === 'object' ? (
                    <ObjectEditor
                      fields={section.fields}
                      value={draft[active]}
                      onChange={v => setDraft(prev => ({ ...prev, [active]: v }))}
                      context={draft}
                    />
                  ) : (
                    <ListEditor
                      fields={section.fields}
                      itemTitle={section.itemTitle}
                      value={draft[active] || []}
                      onChange={v => setDraft(prev => ({ ...prev, [active]: v }))}
                      context={draft}
                    />
                  )}
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  )
}
