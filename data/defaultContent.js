// Konten awal portfolio. Dipakai saat database belum berisi data
// (atau DATABASE_URL belum di-set). Setelah disimpan lewat /admin,
// data dari database yang akan dipakai.
const defaultContent = {
  profile: {
    name: 'Ali Murtadho',
    initials: 'AM',
    title: 'Software Engineer',
    subtitle: 'System Analyst',
    summary: 'Building scalable enterprise applications across finance, government, and corporate systems. Experienced with Golang, Laravel, FastAPI, Node.js, and modern frontend frameworks.',
    avatar: '/assets/profile.svg',
    cvUrl: '/assets/CV_Ali-Murtadho_June_2026.pdf',
    location: 'Indonesia',
    statusText: 'Available for hire',
    showStatus: true,
    aboutTagline: 'Software Engineer & System Analyst based in Indonesia',
    aboutParagraphs: [
      'Software Engineer and System Analyst with experience designing, developing, and maintaining scalable enterprise applications across finance, government payment, corporate, and school management systems. Skilled in backend and full-stack development with Golang, Laravel, FastAPI, Node.js, PostgreSQL, and Vue.js.',
      'Experienced with RESTful APIs, system integration, cloud deployment (AWS), Docker, and Kubernetes. Strong in SDLC, PRD/SRS preparation, ERD and wireframing, and translating business needs into technical solutions.'
    ],
    contactIntro: 'Feel free to reach out for collaboration, opportunities, or just to say hello.',
    opportunitiesTitle: 'Open to Opportunities',
    opportunitiesText: "I'm currently open to full-time, contract, and freelance opportunities. Especially interested in roles involving backend development, system architecture, and enterprise application development. Available for remote and hybrid work arrangements."
  },

  experience: [
    {
      range: 'Nov 2025 – Present',
      role: 'IT Business Application Developer',
      company: 'PT. Garudafood Putra Putri Jaya Tbk',
      location: 'Jakarta',
      logo: '/assets/icons/companies/garudafood.svg',
      desc: [
        'Developed and maintained enterprise internal web apps (Internal Audit tracking, HC Monitoring) using Laravel, Node.js, FastAPI, PostgreSQL, SQL Server, N8N, and AWS.',
        'Collaborated with Head of IT, HC, Internal Audit, and Internal Control to analyse requirements and deliver SDLC-aligned solutions.',
        'Prepared PRD, SRS, ERD and wireframes; managed deployment and containerization with Docker and Kubernetes.'
      ]
    },
    {
      range: 'Dec 2024 – Nov 2025',
      role: 'Backend Developer',
      company: 'PT Lawang Sewu Teknologi',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/lawangsewu.svg',
      desc: [
        'Designed and developed 3 backend enterprise projects with Golang and PostgreSQL: Soft Token app (banking), Government Payment (SIPD), School Management with payment gateway.',
        'Implemented encryption/decryption, debugging, low-code optimization, and collaborated with cross-functional teams.'
      ]
    },
    {
      range: 'Nov 2023 – Nov 2024',
      role: 'Full Stack Developer',
      company: 'PT Lawang Sewu Teknologi',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/lawangsewu.svg',
      desc: [
        'Built 5 full-stack web apps using PHP Laravel, Golang backend, and Vue.js frontend with auth, API integrations, dashboards and management modules.',
        'Used GitLab, implemented testing and performance optimizations.'
      ]
    },
    {
      range: 'Oct 2022 – Jan 2023',
      role: 'Web Developer Intern',
      company: 'PT Kereta Api Indonesia (Persero) DAOP 5',
      location: 'Purwokerto',
      logo: '/assets/icons/companies/kai.svg',
      desc: [
        'Co-developed an operational web app for tracking train departure performance using PHP and MySQL.',
        'Performed unit and black-box testing (100% test success) and deployed 3 customized station applications.'
      ]
    }
  ],

  skills: [
    { category: 'Backend & Languages', items: ['Golang', 'Python (FastAPI)', 'PHP (Laravel)', 'Node.js (Express)'] },
    { category: 'Frontend & UI', items: ['Vue.js', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Inertia.js'] },
    { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'N8N', 'Git / GitLab'] },
    { category: 'System Analysis', items: ['PRD', 'SRS', 'ERD Design', 'Wireframing', 'System Integration'] }
  ],

  skillIcons: [
    { name: 'Golang', icon: '/assets/icons/skills/golang.svg' },
    { name: 'Python (FastAPI)', icon: '/assets/icons/skills/python.svg' },
    { name: 'PHP (Laravel)', icon: '/assets/icons/skills/laravel.svg' },
    { name: 'Node.js (Express)', icon: '/assets/icons/skills/nodejs.svg' },
    { name: 'Vue.js', icon: '/assets/icons/skills/vuejs.svg' },
    { name: 'React.js', icon: '/assets/icons/skills/react.svg' },
    { name: 'JavaScript', icon: '/assets/icons/skills/javascript.svg' },
    { name: 'PostgreSQL', icon: '/assets/icons/skills/postgresql.svg' },
    { name: 'MySQL', icon: '/assets/icons/skills/mysql.svg' },
    { name: 'SQL Server', icon: '/assets/icons/skills/mysql.svg' },
    { name: 'Docker', icon: '/assets/icons/skills/docker.svg' },
    { name: 'Kubernetes', icon: '/assets/icons/skills/kubernetes.svg' },
    { name: 'AWS', icon: '/assets/icons/skills/aws.svg' },
    { name: 'Git / GitLab', icon: '/assets/icons/skills/git.svg' }
  ],

  categories: [
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ml', name: 'Machine Learning' }
  ],

  projects: [
    {
      title: 'Finance Personal Assistant LLM',
      shortDesc: 'Multi-agent LLM-based financial assistant with FastAPI and OpenAI integrations.',
      desc: 'Multi-agent LLM-based financial assistant built with FastAPI and OpenAI integrations for expense analysis, budgeting, and financial recommendations. Backend uses Pydantic for validation.',
      img: '/assets/icons/projects/finance-llm.svg',
      tags: ['FastAPI', 'Python', 'OpenAI', 'Pydantic'],
      category: 'ml',
      featured: true,
      links: [{ label: 'Repository', url: 'https://github.com/ali-murtadho/LLM-Finance-Assistant' }]
    },
    {
      title: 'Finance Management App',
      shortDesc: 'Interactive personal finance tracking app using React, Inertia, and Golang backend.',
      desc: 'Interactive frontend app (React / Inertia) and scalable backend (Golang) for personal finance tracking. Implements role-based auth and microservice patterns.',
      img: '/assets/icons/projects/finance-app.svg',
      tags: ['React', 'Inertia.js', 'Golang', 'Microservices'],
      category: 'fullstack',
      featured: true,
      links: [
        { label: 'Backend', url: 'https://github.com/ali-murtadho/go-backend-manajemen-keuangan' },
        { label: 'Frontend', url: 'https://github.com/ali-murtadho/react-frontend-manajemen-keuangan/tree/dev-bs' }
      ]
    },
    {
      title: 'Blog Backend RESTful API',
      shortDesc: 'High-performance RESTful API with Golang Gin, JWT auth, and Swagger docs.',
      desc: 'High-performance RESTful API using Golang Gin framework. Features JWT authentication, role-based access control, and auto-generated Swagger API documentation.',
      img: '/assets/icons/projects/blog-api.svg',
      tags: ['Golang', 'Gin', 'JWT', 'Swagger', 'PostgreSQL'],
      category: 'backend',
      featured: true,
      links: [{ label: 'Repository', url: 'https://github.com/ali-murtadho/Blogs-Project-Backend-App' }]
    },
    {
      title: 'Portfolio Frontend v2',
      shortDesc: 'Interactive and responsive portfolio UI built with React and Next.js.',
      desc: 'Interactive and responsive portfolio UI built with React and Next.js.',
      img: '/assets/icons/projects/portfolio-fe.svg',
      tags: ['React', 'Next.js', 'CSS Modules'],
      category: 'frontend',
      featured: true,
      links: [{ label: 'Repository', url: 'https://github.com/ali-murtadho/portfolio-fe-v2' }]
    },
    {
      title: 'Klasifikasi Kualitas Padi Organik (wkpo-app-v2)',
      shortDesc: 'Decision Tree model built with Django and Scikit-Learn using C4.5 algorithm.',
      desc: 'Agricultural information system using Python Django and Scikit-Learn (C4.5 Decision Tree) for classifying organic rice quality. Features data visualization and model accuracy metrics.',
      img: '/assets/icons/projects/wkpo.svg',
      tags: ['Python', 'Django', 'Scikit-Learn', 'Machine Learning'],
      category: 'ml',
      featured: true,
      links: [{ label: 'Repository', url: 'https://github.com/ali-murtadho/wkpo-app-v2' }]
    }
  ],

  education: [
    {
      school: 'Jenderal Soedirman University (UNSOED)',
      degree: 'Bachelor of Computer Science / Informatics (S1)',
      period: '2020 – 2024',
      gpa: '3.71 / 4.00',
      note: 'Selected as University Representative at 2022 Gemastik (Data Mining).'
    }
  ],

  certifications: [
    { title: 'Scalable Web Service with Golang', org: 'Kominfo x Hacktiv8', date: 'Mar 2024' },
    { title: 'Machine Learning & Data Mining', org: 'Digital Talent Scholarship', date: 'Apr 2023' },
    { title: 'AWS Cloud Foundations & Architecting', org: 'AWS Academy', date: '2023' },
    { title: 'TOEFL English Proficiency', org: 'Certified', date: 'Dec 2024' }
  ],

  achievements: [
    { title: '2nd Place (Silver) — Data Mining', org: 'HIMTIKA Unsika', year: '2022' },
    { title: '2nd Place — Student Scientific Creativity', org: 'BEM Unsoed', year: '2022' },
    { title: 'Bronze Medal — National Olympiad (Computer)', org: 'POSI', year: '2021' }
  ],

  organizations: [
    {
      name: 'BEM Fakultas Teknik Unsoed',
      role: 'Research & Technology Division',
      period: 'Feb 2022 – Nov 2022',
      desc: 'Led research initiatives, organized Research Essay Contest (189% increase in participation), and mentored students on academic writing & PKM proposals.'
    },
    {
      name: 'Indonesia AI',
      role: 'Data Science R&D Staff',
      period: 'Dec 2021 – May 2022',
      desc: 'Researched Data Science topics, co-organized a national webinar (190+ participants), and established partnerships with media and speakers.'
    }
  ],

  contacts: [
    { icon: '✉️', label: 'Email', value: 'alimurtadho1620@gmail.com', href: 'mailto:alimurtadho1620@gmail.com', showOnHome: true },
    { icon: '💻', label: 'GitHub', value: 'github.com/ali-murtadho', href: 'https://github.com/ali-murtadho', showOnHome: true },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/alimurtadho', href: 'https://linkedin.com/in/alimurtadho', showOnHome: true },
    { icon: '📱', label: 'WhatsApp', value: '+62 878-7488-1600', href: 'https://api.whatsapp.com/send/?phone=6287874881600&text&type=phone_number&app_absent=0', showOnHome: false }
  ]
}

export const SECTION_KEYS = Object.keys(defaultContent)

export default defaultContent
