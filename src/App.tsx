import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    document.title = "Portfolio | Product Thinker & Builder"
  }, [])

  const navigation = [
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Resume', href: '#' },
  ]

  const sections = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stack', href: '#stack' },
  ]

  const experience = [
    {
      role: 'Senior Product Designer',
      company: 'Vertex Systems',
      period: '2021 — Present',
      description: [
        'Led the redesign of the core enterprise dashboard, increasing user retention by 24%.',
        'Architected a comprehensive design system used by 3 separate product teams.',
        'Mentored junior designers and established weekly design critique sessions.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Nova Interactive',
      period: '2018 — 2021',
      description: [
        'Developed high-performance React applications for Series A startups.',
        'Optimized database queries reducing API latency by 40%.',
        'Collaborated closely with stakeholders to translate business needs into technical specs.'
      ]
    }
  ]

  const stack = [
    { category: 'Design', items: ['Figma', 'Adobe Suite', 'Framer'] },
    { category: 'Dev', items: ['TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Productivity', items: ['Notion', 'Linear', 'Raycast'] },
    { category: 'AI', items: ['Midjourney', 'GPT-4', 'Claude'] }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a1a1aa] font-sans selection:bg-[#195de6] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-tight">RK.</a>
          <div className="flex gap-8 items-center text-sm font-medium">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-2">
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
              Raunaq Kapoor
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[#195de6]">
              Product Builder
            </h2>
          </div>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
            I bridge the gap between complex engineering and human-centric design, obsessing over clean code and minimalist interfaces.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium pt-4">
            {sections.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
          <h2 className="text-white text-lg font-semibold uppercase tracking-widest">About</h2>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
            <p>
              With over 8 years in the digital space, I've worn many hats: from full-stack developer to lead product designer. My philosophy is simple: technology should be invisible. I strive to create experiences where the user achieves their goal without ever noticing the "interface."
            </p>
            <p>
              When I'm not pushing pixels or refactoring React components, you'll find me exploring the intersection of AI and human creativity. I believe the next decade of software will be defined by how well we integrate agentic workflows into our daily habits.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
          <h2 className="text-white text-lg font-semibold uppercase tracking-widest">Experience</h2>
          <div className="md:col-span-2 space-y-16">
            {experience.map((item, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h3 className="text-white text-2xl font-semibold group-hover:text-[#195de6] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm font-mono text-zinc-500 uppercase tracking-tighter">
                    {item.period}
                  </span>
                </div>
                <p className="text-[#195de6] font-medium text-lg">{item.company}</p>
                <ul className="space-y-3">
                  {item.description.map((line, lidx) => (
                    <li key={lidx} className="flex gap-3">
                      <span className="text-[#195de6] mt-1.5 shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
          <h2 className="text-white text-lg font-semibold uppercase tracking-widest">My Stack</h2>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stack.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider opacity-50">{group.category}</h4>
                <ul className="space-y-2">
                  {group.items.map((item, iidx) => (
                    <li key={iidx} className="text-zinc-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tinkering Section */}
        <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
          <h2 className="text-white text-lg font-semibold uppercase tracking-widest">Interests</h2>
          <div className="md:col-span-2">
            <p className="text-lg italic text-zinc-500">
              I'm currently documenting my photography and coffee brewing experiments. Check back later.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm">
            © 2024 Raunaq Kapoor. Built with intention.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
            <a href="#" className="hover:text-white transition-colors">Resume</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
