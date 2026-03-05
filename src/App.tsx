import './App.css'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const experience = [
  {
    role: 'Senior Product Designer',
    company: 'Vertex Systems',
    period: '2021 — Present',
    bullets: [
      'Led the redesign of the core enterprise dashboard, increasing user retention by 24%.',
      'Architected a comprehensive design system used by 3 separate product teams.',
      'Mentored junior designers and established weekly design critique sessions.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Nova Interactive',
    period: '2018 — 2021',
    bullets: [
      'Developed high-performance React applications for Series A startups.',
      'Optimized database queries reducing API latency by 40%.',
      'Collaborated closely with stakeholders to translate business needs into technical specs.',
    ],
  },
]

const stack = [
  { category: 'DESIGN', items: ['Figma', 'Adobe Suite', 'Framer'] },
  { category: 'DEV', items: ['TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'PRODUCTIVITY', items: ['Notion', 'Linear', 'Raycast'] },
  { category: 'AI', items: ['Midjourney', 'GPT-4', 'Claude'] },
]

export default function App() {
  return (
    <div className="app-root">
      {/* Top-right header bar */}
      <header className="top-header">
        <a href="#" className="logo">RK.</a>
        <nav className="top-nav">
          <a href="https://github.com/raunaq-kapoor" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="#newsletter" className="nav-link">Newsletter</a>
          <a href="#" className="btn-resume">Resume</a>
        </nav>
      </header>

      <div className="layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="avatar">
            <img src="/profile.jpg" alt="Raunaq Kapoor" className="avatar-img" />
          </div>
          <h1 className="sidebar-name">Raunaq Kapoor</h1>
          <p className="sidebar-title">Product Builder</p>
          <p className="sidebar-bio">
            I bridge the gap between complex engineering and human-centric design, obsessing over clean code and minimalist interfaces.
          </p>
          <nav className="sidebar-nav">
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#stack">STACK</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main-content">
          {/* About */}
          <section id="about" className="section">
            <h2 className="section-title">ABOUT</h2>
            <div className="section-body">
              <p>
                With over 8 years in the digital space, I've worn many hats: from full-stack developer to lead product designer. My philosophy is simple: technology should be invisible. I strive to create experiences where the user achieves their goal without ever noticing the "interface."
              </p>
              <p>
                When I'm not pushing pixels or refactoring React components, you'll find me exploring the intersection of AI and human creativity. I believe the next decade of software will be defined by how well we integrate agentic workflows into our daily habits.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="section">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="section-body experience-list">
              {experience.map((job, i) => (
                <div key={i} className="job-entry">
                  <div className="job-header">
                    <span className="job-role">{job.role}</span>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <p className="job-company">{job.company}</p>
                  <ul className="job-bullets">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* My Stack */}
          <section id="stack" className="section">
            <h2 className="section-title">MY STACK</h2>
            <div className="section-body stack-grid">
              {stack.map((group, i) => (
                <div key={i} className="stack-card">
                  <h4 className="stack-category">{group.category}</h4>
                  <ul className="stack-items">
                    {group.items.map((item, ii) => (
                      <li key={ii}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section id="interests" className="section">
            <h2 className="section-title">INTERESTS &amp; TINKERING</h2>
            <div className="section-body">
              <span className="coming-soon-badge">COMING SOON</span>
              <p className="interests-text">
                I'm currently documenting my photography and coffee brewing experiments. Check back later.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>© 2024 Raunaq Kapoor. Built with <a href="#" className="footer-link">intention.</a></span>
        <nav className="footer-nav">
          <a href="#newsletter">Newsletter</a>
          <a href="#">Resume</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>
    </div>
  )
}
