import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const router = useRouter()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header>
      <div className="nav-inner">
        <Link href="/" className="nav-brand" style={{ textDecoration: 'none' }}>
          AM
        </Link>
        <nav>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={router.pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <span className="status-badge" style={{ marginLeft: 8 }}>
            Available for hire
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
