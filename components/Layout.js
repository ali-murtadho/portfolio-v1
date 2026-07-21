export default function Layout({ children }) {
  return (
    <div>
      <div className="container">
        {children}
      </div>

      <footer style={{textAlign:'center',padding:20,color:'rgba(15,23,42,0.6)'}}>
        © {new Date().getFullYear()} Ali Murtadho — Built with Next.js
      </footer>
    </div>
  )
}
