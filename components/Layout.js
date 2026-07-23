import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>

      <footer>
        <p>
          © {new Date().getFullYear()} Ali Murtadho &mdash; Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
        </p>
      </footer>
    </div>
  )
}
