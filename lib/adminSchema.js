// Definisi form untuk tiap bagian konten di panel /admin.
// type: 'object' = satu objek, 'list' = daftar item yang bisa ditambah/dihapus/diurutkan.
// Tipe field: text, textarea, boolean, lines (satu baris = satu item),
// tags (dipisah koma), category (pilihan dari bagian Kategori), list (daftar bersarang).

const sections = [
  {
    key: 'profile',
    label: 'Profil',
    type: 'object',
    fields: [
      { name: 'name', label: 'Nama lengkap', type: 'text' },
      { name: 'initials', label: 'Inisial (logo di header)', type: 'text' },
      { name: 'title', label: 'Jabatan utama', type: 'text' },
      { name: 'subtitle', label: 'Jabatan kedua', type: 'text' },
      { name: 'summary', label: 'Ringkasan (Hero di beranda)', type: 'textarea' },
      { name: 'avatar', label: 'URL foto profil', type: 'text', placeholder: '/assets/profile.svg' },
      { name: 'cvUrl', label: 'URL file CV', type: 'text', placeholder: '/assets/CV.pdf' },
      { name: 'location', label: 'Lokasi', type: 'text' },
      { name: 'showStatus', label: 'Tampilkan badge status di header', type: 'boolean' },
      { name: 'statusText', label: 'Teks badge status', type: 'text' },
      { name: 'aboutTagline', label: 'Tagline halaman About', type: 'text' },
      { name: 'aboutParagraphs', label: 'Paragraf About (satu baris = satu paragraf)', type: 'lines' },
      { name: 'contactIntro', label: 'Intro halaman Contact', type: 'textarea' },
      { name: 'opportunitiesTitle', label: 'Judul kotak "Open to Opportunities"', type: 'text' },
      { name: 'opportunitiesText', label: 'Isi kotak "Open to Opportunities"', type: 'textarea' }
    ]
  },
  {
    key: 'experience',
    label: 'Pengalaman',
    type: 'list',
    itemTitle: item => item.role ? `${item.role} — ${item.company}` : '',
    fields: [
      { name: 'role', label: 'Posisi', type: 'text' },
      { name: 'company', label: 'Perusahaan', type: 'text' },
      { name: 'location', label: 'Lokasi', type: 'text' },
      { name: 'range', label: 'Periode', type: 'text', placeholder: 'Jan 2024 – Present' },
      { name: 'logo', label: 'URL logo', type: 'text' },
      { name: 'desc', label: 'Deskripsi (satu baris = satu poin)', type: 'lines' }
    ]
  },
  {
    key: 'projects',
    label: 'Proyek',
    type: 'list',
    itemTitle: item => item.title,
    fields: [
      { name: 'title', label: 'Judul', type: 'text' },
      { name: 'shortDesc', label: 'Deskripsi singkat (kartu di beranda)', type: 'textarea' },
      { name: 'desc', label: 'Deskripsi lengkap (halaman Projects)', type: 'textarea' },
      { name: 'img', label: 'URL gambar/ikon', type: 'text' },
      { name: 'tags', label: 'Tag teknologi (pisahkan dengan koma)', type: 'tags' },
      { name: 'category', label: 'Kategori', type: 'category' },
      { name: 'featured', label: 'Tampilkan di Featured Projects (beranda)', type: 'boolean', default: true },
      {
        name: 'links',
        label: 'Link',
        type: 'list',
        itemTitle: item => item.label,
        fields: [
          { name: 'label', label: 'Label', type: 'text', placeholder: 'Repository' },
          { name: 'url', label: 'URL', type: 'text', placeholder: 'https://' }
        ]
      }
    ]
  },
  {
    key: 'categories',
    label: 'Kategori Proyek',
    type: 'list',
    itemTitle: item => item.name,
    fields: [
      { name: 'id', label: 'ID (huruf kecil, tanpa spasi)', type: 'text', placeholder: 'backend' },
      { name: 'name', label: 'Nama tampilan', type: 'text' }
    ]
  },
  {
    key: 'skills',
    label: 'Skill',
    type: 'list',
    itemTitle: item => item.category,
    fields: [
      { name: 'category', label: 'Nama kategori', type: 'text' },
      { name: 'items', label: 'Skill (pisahkan dengan koma)', type: 'tags' }
    ]
  },
  {
    key: 'skillIcons',
    label: 'Ikon Skill',
    type: 'list',
    itemTitle: item => item.name,
    fields: [
      { name: 'name', label: 'Nama skill (harus sama persis dengan di bagian Skill)', type: 'text' },
      { name: 'icon', label: 'URL ikon', type: 'text' }
    ]
  },
  {
    key: 'education',
    label: 'Pendidikan',
    type: 'list',
    itemTitle: item => item.school,
    fields: [
      { name: 'school', label: 'Institusi', type: 'text' },
      { name: 'degree', label: 'Gelar / jurusan', type: 'text' },
      { name: 'period', label: 'Periode', type: 'text' },
      { name: 'gpa', label: 'IPK', type: 'text' },
      { name: 'note', label: 'Catatan', type: 'textarea' }
    ]
  },
  {
    key: 'certifications',
    label: 'Sertifikasi',
    type: 'list',
    itemTitle: item => item.title,
    fields: [
      { name: 'title', label: 'Nama sertifikasi', type: 'text' },
      { name: 'org', label: 'Penerbit', type: 'text' },
      { name: 'date', label: 'Tanggal', type: 'text' }
    ]
  },
  {
    key: 'achievements',
    label: 'Prestasi',
    type: 'list',
    itemTitle: item => item.title,
    fields: [
      { name: 'title', label: 'Prestasi', type: 'text' },
      { name: 'org', label: 'Penyelenggara', type: 'text' },
      { name: 'year', label: 'Tahun', type: 'text' }
    ]
  },
  {
    key: 'organizations',
    label: 'Organisasi',
    type: 'list',
    itemTitle: item => item.name,
    fields: [
      { name: 'name', label: 'Organisasi', type: 'text' },
      { name: 'role', label: 'Peran / divisi', type: 'text' },
      { name: 'period', label: 'Periode', type: 'text' },
      { name: 'desc', label: 'Deskripsi', type: 'textarea' }
    ]
  },
  {
    key: 'contacts',
    label: 'Kontak',
    type: 'list',
    itemTitle: item => item.label,
    fields: [
      { name: 'icon', label: 'Ikon (emoji)', type: 'text' },
      { name: 'label', label: 'Label', type: 'text' },
      { name: 'value', label: 'Teks yang ditampilkan', type: 'text' },
      { name: 'href', label: 'Link', type: 'text', placeholder: 'https:// atau mailto:' },
      { name: 'showOnHome', label: 'Tampilkan di sidebar beranda', type: 'boolean' }
    ]
  }
]

export function emptyValue(field) {
  if (field.default !== undefined) return field.default
  switch (field.type) {
    case 'boolean': return false
    case 'lines':
    case 'tags':
    case 'list': return []
    default: return ''
  }
}

export function emptyItem(fields) {
  return Object.fromEntries(fields.map(f => [f.name, emptyValue(f)]))
}

export default sections
