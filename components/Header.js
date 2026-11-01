import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'

export default function Header({ profile = {} }) {
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
          {profile.initials}
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
          {profile.showStatus && profile.statusText && (
            <span className="status-badge" style={{ marginLeft: 8 }}>
              {profile.statusText}
            </span>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
