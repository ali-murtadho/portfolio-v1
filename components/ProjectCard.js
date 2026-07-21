export default function ProjectCard({title,desc,img}){
  return (
    <div className="card project-card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <p style={{color:'var(--muted)'}}>{desc}</p>
      {img && <img src={img} alt={title} style={{marginTop:12,maxWidth:'100%'}} />}
    </div>
  )
}
