import Header from './Header'

export default function Layout({ profile = {}, children }) {
  return (
    <div>
      <Header profile={profile} />
      <div className="container">
        {children}
      </div>

      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name} &mdash; Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
        </p>
      </footer>
    </div>
  )
}
