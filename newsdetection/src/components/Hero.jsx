export default function Hero() {
  return (
    <section id="detect" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 pt-20 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left ── */}
          <div className="lg:col-span-7">
            <div className="relative">
              <span className="absolute -top-12 -left-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#D2E823] border-2 border-[#09090B] rounded-full font-bold text-sm -rotate-2 transform z-10">
                <iconify-icon icon="lucide:badge-check" class="text-base" />
                AI VERIFIED SYSTEM
              </span>
              <h1 className="font-display text-7xl md:text-[8rem] leading-[0.85] hover:animate-glitch cursor-default">
                SPOT<br />FAKE<br />NEWS
              </h1>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-6">
              <a
                href="#"
                id="cta-primary"
                className="group relative inline-block px-10 py-5 bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] hard-shadow-lg btn-press cursor-none"
              >
                <span className="font-display text-2xl flex items-center gap-3">
                  <iconify-icon icon="lucide:scan-search" />
                  SCAN CONTENT
                </span>
              </a>
              <div className="max-w-xs">
                <p className="text-lg font-medium leading-tight">
                  Analyze news articles, social media posts, and forwarded messages using AI-powered misinformation detection and credibility analysis.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: AI Dashboard Card ── */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#09090B] border-2 border-[#09090B] rounded-[32px] overflow-hidden aspect-[4/5] relative">
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="AI Analytics Dashboard"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/40 via-transparent to-[#09090B]/80" />
              <div className="absolute inset-0 grid-pattern opacity-40" />

              {/* Dashboard overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#D2E823] animate-scan-pulse" />
                    <span className="text-[#D2E823] font-mono text-xs font-bold tracking-widest">LIVE SCAN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#F8F4E8]/40 font-mono text-xs">v3.1.0</span>
                    <div className="w-6 h-6 border border-[#D2E823]/30 rounded flex items-center justify-center">
                      <iconify-icon icon="lucide:wifi" class="text-[#D2E823] text-[10px]" />
                    </div>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D2E823]/60 to-transparent animate-scan-line" />

                {/* Credibility Ring */}
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                  <div className="relative w-44 h-44">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 animate-ring-rotate">
                      <svg viewBox="0 0 176 176" className="w-full h-full">
                        <circle cx="88" cy="88" r="82" fill="none" stroke="#D2E823" strokeWidth="1" opacity="0.15" strokeDasharray="8 8" />
                      </svg>
                    </div>
                    {/* Middle ring */}
                    <div className="absolute inset-2 animate-ring-rotate-rev">
                      <svg viewBox="0 0 160 160" className="w-full h-full">
                        <circle cx="80" cy="80" r="74" fill="none" stroke="#D2E823" strokeWidth="1.5" opacity="0.1" strokeDasharray="4 12" />
                      </svg>
                    </div>
                    {/* Main progress arcs */}
                    <svg viewBox="0 0 176 176" className="w-full h-full">
                      <circle cx="88" cy="88" r="70" fill="none" stroke="#D2E823" strokeWidth="2" opacity="0.12" />
                      <circle cx="88" cy="88" r="70" fill="none" stroke="#D2E823" strokeWidth="3" strokeDasharray="330 110" strokeLinecap="round" strokeDashoffset="-55" opacity="0.9">
                        <animateTransform attributeName="transform" type="rotate" from="0 88 88" to="360 88 88" dur="6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="88" cy="88" r="58" fill="none" stroke="#D2E823" strokeWidth="2" strokeDasharray="260 105" strokeLinecap="round" opacity="0.5">
                        <animateTransform attributeName="transform" type="rotate" from="360 88 88" to="0 88 88" dur="8s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-5xl text-[#D2E823]">94</span>
                      <span className="text-[#F8F4E8]/50 font-mono text-[10px] tracking-[0.2em]">CREDIBILITY</span>
                    </div>
                  </div>

                  {/* Status bars */}
                  <div className="w-full max-w-[240px] space-y-2.5 mt-2">
                    {[
                      { label: 'SOURCE TRUST',    pct: 92, color: '#D2E823',  val: '92%' },
                      { label: 'FACTUAL ACCURACY', pct: 88, color: '#D2E823',  val: '88%' },
                      { label: 'BIAS DETECTION',   pct: 18, color: 'rgba(210,232,35,0.6)', val: 'LOW' },
                      { label: 'MANIPULATION',     pct: 34, color: '#f87171',  val: 'DETECTED', valColor: '#f87171' },
                    ].map(({ label, pct, color, val, valColor }) => (
                      <div key={label}>
                        <div className="flex justify-between text-[10px] font-mono text-[#F8F4E8]/50 mb-1">
                          <span>{label}</span>
                          <span style={{ color: valColor || '#D2E823' }}>{val}</span>
                        </div>
                        <div className="h-1.5 bg-[#F8F4E8]/10 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between border-t border-[#F8F4E8]/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#D2E823]/30 rounded-lg flex items-center justify-center">
                      <iconify-icon icon="lucide:brain-circuit" class="text-[#D2E823] text-sm" />
                    </div>
                    <div>
                      <p className="text-[#F8F4E8]/70 text-[10px] font-mono">NLP ENGINE</p>
                      <p className="text-[#D2E823] text-[10px] font-bold font-mono">PROCESSING</p>
                    </div>
                  </div>
                  <div className="flex gap-1 items-end">
                    {[4, 6, 3, 5, 2].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#D2E823] rounded-full animate-scan-pulse"
                        style={{ height: `${h * 4}px`, animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-10 -left-10 w-64 animate-floating bg-[#D2E823] border-2 border-[#09090B] p-6 hard-shadow-lg z-10">
              <p className="font-display text-xl mb-2">CREDIBILITY ENGINE</p>
              <p className="text-sm leading-snug">Real-time NLP analysis, source verification, emotional manipulation detection, and misinformation scoring.</p>
              <div className="mt-4 pt-4 border-t-2 border-[#09090B] flex justify-between items-center">
                <span className="font-bold">v3.1 AI MODEL</span>
                <iconify-icon icon="lucide:zap" class="text-xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
