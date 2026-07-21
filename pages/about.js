import Head from 'next/head'
import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout>
      <Head>
        <title>About — Ali Murtadho</title>
        <meta name="description" content="About — Ali Murtadho" />
      </Head>

      <main>
        <h1>About</h1>

        
        <p>
          Software Engineer and System Analyst with experience designing, developing, and maintaining scalable enterprise applications across finance, government payment, corporate, and school management systems. Skilled in backend and full-stack development with Golang, Laravel, FastAPI, Node.js, PostgreSQL, and Vue.js. Experienced with RESTful APIs, system integration, cloud deployment (AWS), Docker, and Kubernetes. Strong in SDLC, PRD/SRS preparation, ERD and wireframing, and translating business needs into technical solutions.
        </p>

        <h2>Education</h2>
        <div className="card">
          <h3>Jenderal Soedirman University (UNSOED)</h3>
          <p>Bachelor of Computer Science / Informatics (S1) | 2020 – 2024</p>
          <p>GPA: 3.71 / 4.00</p>
          <p>Selected as University Representative at <em>2022 Gemastik (Data Mining)</em>.</p>
        </div>

        <h2 style={{marginTop:18}}>Certifications</h2>
        <div className="card">
          <ul>
            <li>Scalable Web Service with Golang — Fresh Graduate Academy (Kominfo x Hacktiv8) (Mar 2024)</li>
            <li>Machine Learning and Data Mining — Digital Talent Scholarship (Apr 2023)</li>
            <li>AWS Academy Cloud Foundations & Cloud Architecting — AWS Academy</li>
            <li>TOEFL English Proficiency Test — Certified (Dec 2024)</li>
          </ul>
        </div>

        <h2 style={{marginTop:18}}>Achievements</h2>
        <div className="card">
          <ol>
            <li>2nd Place (Silver) — Data Mining Competition, HIMTIKA Unsika (2022)</li>
            <li>2nd Place — Call for Student Scientific Creativity (PKM), BEM Unsoed (2022)</li>
            <li>Bronze Medal — National Student Olympiad for Computers, POSI (2021)</li>
          </ol>
        </div>

        <h2 style={{marginTop:18}}>Leadership & Organizational Experience</h2>
        <div className="card">
          <h3>BEM Fakultas Teknik Unsoed — Research and Technology Division</h3>
          <p>Staff / Researcher | Feb 2022 – Nov 2022</p>
          <ul>
            <li>Led research initiatives, organized Research Essay Contest (189% increase in participation), and mentored students on academic writing & PKM proposals.</li>
          </ul>

          <h3 style={{marginTop:12}}>Indonesia AI — Data Science Division</h3>
          <p>R&D Staff | Dec 2021 – May 2022</p>
          <ul>
            <li>Researched Data Science topics, co-organized a national webinar (190+ participants), and established partnerships with media and speakers.</li>
          </ul>
        </div>

        <h2>Experience</h2>
        <ul>
          <li><strong>Frontend Engineer</strong> — multiple product & personal projects (2021–Present): Frontend apps, design systems, and end-to-end feature delivery.</li>
        </ul>

        <h2>Skills</h2>
        <p>See the Skills section (right column on the homepage) for categorized technical skills and tools.</p>
      </main>
    </Layout>
  )
}
