import React from 'react'

const works = [
  { id: 1, title: 'Veridian Energy', tag: 'Branding', year: '2025', accent: 'from-[#D3FD50] to-[#9AD61F]' },
  { id: 2, title: 'Aurora Commerce', tag: 'E‑Commerce', year: '2025', accent: 'from-[#D3FD50] to-[#4CF0A5]' },
  { id: 3, title: 'Pulse Health', tag: 'Product', year: '2024', accent: 'from-[#D3FD50] to-[#51C5FF]' },
  { id: 4, title: 'Orbit Finance', tag: 'Web App', year: '2024', accent: 'from-[#D3FD50] to-[#8B5CF6]' },
  { id: 5, title: 'Echo Media', tag: 'Campaign', year: '2023', accent: 'from-[#D3FD50] to-[#F97316]' },
]

const Work = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 md:pt-40 px-4 sm:px-6 lg:px-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">Selected Work</h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">A curated set of recent projects delivered with the same craft, clarity, and creative rigor — adapted for every screen.</p>

        {/* Filters (non-interactive visual chips for consistency) */}
        <div className="mt-5 flex flex-wrap gap-2">
          {['All', 'Branding', 'Product', 'Web', 'Campaigns'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full border border-neutral-700 text-xs sm:text-sm text-neutral-200 hover:border-neutral-500 transition-colors">{f}</span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {works.map((work) => (
            <article key={work.id} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40">
                {/* Visual cover */}
                <div className={`aspect-[16/10] sm:aspect-[16/9] w-full bg-gradient-to-br ${work.accent} transition-transform duration-500 group-hover:scale-[1.02]`}>
                  {/* Subtle radial shine */}
                  <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" style={{
                    background: 'radial-gradient(1200px 400px at 80% 10%, rgba(255,255,255,0.25), transparent 50%)'
                  }} />
                </div>

                {/* Meta */}
                <div className="p-4 sm:p-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{work.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-400">{work.tag}</p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-neutral-400">{work.year}</span>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-black flex items-end">
                  <div className="p-4 sm:p-5 w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm uppercase tracking-wide">Case Study</p>
                        <p className="text-sm sm:text-base font-medium">Explore the process</p>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold">↗</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mt-24 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Have something in mind?</h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-1">We bring ideas to life with strategy, design, and engineering.</p>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#D3FD50]/60 bg-[#D3FD50]/10 px-4 py-2 text-sm sm:text-base text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition-colors">Start a project <span className="text-lg">↳</span></a>
        </div>
      </section>
    </div>
  )
}

export default Work;