import Link from 'next/link'

export default function Header(){
  return (
    <header style={{padding:'12px 24px',borderBottom:'1px solid rgba(2,6,23,0.04)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700}}>Ali Murtadho</div>
        <nav style={{display:'flex',gap:8,alignItems:'center'}}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
