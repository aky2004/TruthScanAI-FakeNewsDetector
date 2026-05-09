export default function BentoGrid() {
  return (
    <section id="reports" className="container mx-auto px-4 md:px-8 py-20">
      <div className="mb-12">
        <p className="font-bold uppercase tracking-[0.2em] text-[#09090B]/50 text-xs mb-3 font-mono">
          // Detection Arsenal
        </p>
        <h2 className="font-display text-4xl md:text-5xl">HOW IT WORKS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[800px]">

        {/* ── Large Card: Source Integrity ── */}
        <div className="md:col-span-2 md:row-span-2 bg-[#09090B] border-2 border-[#09090B] rounded-2xl relative overflow-hidden group hard-shadow-lg card-hover">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1200"
            alt="Source Integrity"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/30 via-transparent to-[#09090B]/90" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative h-full p-10 flex flex-col justify-end text-[#F8F4E8] z-[2]">
            <div className="mb-auto flex items-center gap-2">
              <div className="w-10 h-10 border border-[#D2E823]/30 rounded-lg flex items-center justify-center">
                <iconify-icon icon="lucide:shield-check" class="text-[#D2E823] text-xl" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-[#D2E823]/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-[#D2E823] rounded-full animate-scan-pulse" />
                <span className="font-mono text-[10px] text-[#D2E823]">ACTIVE</span>
              </div>
            </div>
            <p className="font-bold text-sm tracking-widest uppercase mb-4 text-[#D2E823]">
              VERIFICATION TOOLS
            </p>
            <h3 className="font-display text-5xl md:text-6xl mb-6">SOURCE INTEGRITY</h3>
            <a
              href="#"
              id="bento-1-link"
              className="inline-flex items-center gap-4 text-xl font-bold group-hover:gap-6 transition-all cursor-none"
            >
              EXPLORE <iconify-icon icon="lucide:arrow-right-circle" />
            </a>
          </div>
        </div>

        {/* ── Claim Detection ── */}
        <div className="md:col-span-2 md:row-span-1 dot-pattern bg-white border-2 border-[#09090B] rounded-2xl p-8 hard-shadow-md card-hover relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-display text-3xl">CLAIM DETECTION</h3>
              <span className="px-2 py-0.5 bg-[#D2E823] border-2 border-[#09090B] font-bold text-[10px] rounded-full font-mono">
                AI ACTIVE
              </span>
            </div>
            <p className="font-bold text-[#09090B]/70">AI ANALYSIS ACTIVE</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono text-[10px] text-[#09090B]/50">ACCURACY</span>
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-2 bg-[#D2E823] rounded-sm" />
                ))}
                <div className="w-6 h-2 bg-[#09090B]/10 rounded-sm" />
              </div>
              <span className="font-mono text-[10px] font-bold">96%</span>
            </div>
          </div>
          {/* Background icon watermark */}
          <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 opacity-[0.06]">
            <iconify-icon icon="lucide:search-check" class="text-[12rem]" />
          </div>
        </div>

        {/* ── Bias Analysis ── */}
        <div className="md:col-span-1 md:row-span-1 bg-[#D2E823] border-2 border-[#09090B] rounded-2xl p-8 hard-shadow-md card-hover relative overflow-hidden">
          <div className="absolute top-3 right-3 w-6 h-6 border-2 border-[#09090B] rounded-full flex items-center justify-center">
            <iconify-icon icon="lucide:arrow-up-right" class="text-xs" />
          </div>
          <iconify-icon icon="lucide:brain-circuit" class="text-5xl mb-4" />
          <h3 className="font-display text-2xl">
            BIAS<br />ANALYSIS
          </h3>
          <div className="mt-4 flex items-center gap-1">
            <div className="w-2 h-2 bg-[#09090B] rounded-full" />
            <span className="font-mono text-[9px] font-bold tracking-wider">DEEP LEARNING</span>
          </div>
        </div>

        {/* ── Credibility Scoring ── */}
        <div className="md:col-span-1 md:row-span-1 dot-pattern-fine bg-white border-2 border-[#09090B] rounded-2xl p-8 hard-shadow-md card-hover relative overflow-hidden">
          <div className="absolute top-3 right-3 w-6 h-6 border-2 border-[#09090B] rounded-full flex items-center justify-center">
            <iconify-icon icon="lucide:arrow-up-right" class="text-xs" />
          </div>
          <iconify-icon icon="lucide:bar-chart-3" class="text-5xl mb-4 text-[#09090B]" />
          <h3 className="font-display text-2xl">
            CREDIBILITY<br />SCORING
          </h3>
          <div className="mt-4 flex items-center gap-1">
            <div className="w-2 h-2 bg-[#D2E823] rounded-full" />
            <span className="font-mono text-[9px] font-bold tracking-wider text-[#09090B]/50">
              0-100 SCALE
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
