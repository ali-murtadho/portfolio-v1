import { useState } from 'react'
import { emptyItem } from '../../lib/adminSchema'

// Input teks yang disimpan sebagai array (dipisah koma atau baris baru).
// Teks mentah disimpan lokal supaya koma/baris kosong saat mengetik tidak hilang.
function ArrayTextInput({ value, onChange, separator, multiline }) {
  const join = arr => (arr || []).join(separator === ',' ? ', ' : '\n')
  const [text, setText] = useState(join(value))

  const handle = e => {
    setText(e.target.value)
    onChange(e.target.value.split(separator).map(s => s.trim()).filter(Boolean))
  }

  return multiline
    ? <textarea className="admin-input" rows={Math.max(3, (value || []).length + 1)} value={text} onChange={handle} />
    : <input className="admin-input" value={text} onChange={handle} />
}

function Field({ field, value, onChange, context }) {
  switch (field.type) {
    case 'textarea':
      return <textarea className="admin-input" rows={3} value={value || ''} placeholder={field.placeholder} onChange={e => onChange(e.target.value)} />
    case 'boolean':
      return (
        <label className="admin-checkbox">
          <input type="checkbox" checked={Boolean(value)} onChange={e => onChange(e.target.checked)} />
          <span>{field.label}</span>
        </label>
      )
    case 'lines':
      return <ArrayTextInput value={value} onChange={onChange} separator={'\n'} multiline />
    case 'tags':
      return <ArrayTextInput value={value} onChange={onChange} separator="," />
    case 'category':
      return (
        <select className="admin-input" value={value || ''} onChange={e => onChange(e.target.value)}>
          <option value="">— Tanpa kategori —</option>
          {(context.categories || []).map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      )
    case 'list':
      return <ListEditor fields={field.fields} itemTitle={field.itemTitle} value={value || []} onChange={onChange} context={context} nested />
    default:
      return <input className="admin-input" value={value || ''} placeholder={field.placeholder} onChange={e => onChange(e.target.value)} />
  }
}

export function ObjectEditor({ fields, value, onChange, context }) {
  return (
    <div className="admin-fields">
      {fields.map(field => (
        <div className="admin-field" key={field.name}>
          {field.type !== 'boolean' && <label className="admin-label">{field.label}</label>}
          <Field
            field={field}
            value={value?.[field.name]}
            onChange={v => onChange({ ...value, [field.name]: v })}
            context={context}
          />
        </div>
      ))}
    </div>
  )
}

export function ListEditor({ fields, itemTitle, value, onChange, context, nested = false }) {
  const [openIndex, setOpenIndex] = useState(nested ? -1 : null)

  const update = (index, item) => onChange(value.map((it, i) => (i === index ? item : it)))
  const remove = index => {
    if (!confirm('Hapus item ini?')) return
    onChange(value.filter((_, i) => i !== index))
    setOpenIndex(null)
  }
  const move = (index, dir) => {
    const target = index + dir
    if (target < 0 || target >= value.length) return
    const next = [...value]
    ;[next[index], next[target]] = [next[target], next[index]]
    onChange(next)
    if (openIndex === index) setOpenIndex(target)
  }
  const add = () => {
    onChange([...value, emptyItem(fields)])
    setOpenIndex(value.length)
  }

  return (
    <div className={`admin-list ${nested ? 'admin-list-nested' : ''}`}>
      {value.map((item, i) => {
        const open = openIndex === i
        const title = (itemTitle && itemTitle(item)) || `Item ${i + 1}`
        return (
          <div className="admin-list-item" key={i}>
            <div className="admin-list-head">
              <button type="button" className="admin-list-title" onClick={() => setOpenIndex(open ? null : i)}>
                <span>{open ? '▾' : '▸'}</span> {title}
              </button>
              <div className="admin-list-actions">
                <button type="button" title="Naik" disabled={i === 0} onClick={() => move(i, -1)}>↑</button>
                <button type="button" title="Turun" disabled={i === value.length - 1} onClick={() => move(i, 1)}>↓</button>
                <button type="button" title="Hapus" className="danger" onClick={() => remove(i)}>✕</button>
              </div>
            </div>
            {open && (
              <div className="admin-list-body">
                <ObjectEditor fields={fields} value={item} onChange={v => update(i, v)} context={context} />
              </div>
            )}
          </div>
        )
      })}
      <button type="button" className="admin-add" onClick={add}>+ Tambah</button>
    </div>
  )
}
