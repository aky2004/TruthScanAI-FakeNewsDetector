const partners = [
  { icon: 'lucide:radio-tower',  name: 'REUTERS' },
  { icon: 'lucide:newspaper',    name: 'ASSOCIATED PRESS' },
  { icon: 'lucide:search-check', name: 'SNOPES' },
  { icon: 'lucide:check-circle', name: 'FULL FACT' },
  { icon: 'lucide:shield-check', name: 'NEWSGUARD' },
  { icon: 'lucide:radio',        name: 'BBC VERIFY' },
  { icon: 'lucide:scale',        name: 'POLITIFACT' },
  { icon: 'lucide:microscope',   name: 'SCIENCE FACT' },
  { icon: 'lucide:eye',          name: 'PROPUBLICA' },
  { icon: 'lucide:badge-check',  name: 'FACTCHECK.ORG' },
  { icon: 'lucide:globe',        name: 'IFCN' },
  { icon: 'lucide:landmark',     name: 'MALDITA' },
]

function PartnerChip({ icon, name }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-white border-2 border-[#09090B] rounded-xl hard-shadow-sm whitespace-nowrap hover:bg-[#D2E823] transition-colors duration-300">
      <iconify-icon icon={icon} class="text-lg" />
      <span className="font-display text-sm">{name}</span>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="py-12 border-y-2 border-[#09090B] stripe-pattern overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#09090B]/50 text-xs mb-3 font-mono">
              Verified Network
            </p>
            <h2 className="font-display text-3xl md:text-4xl">TRUSTED BY</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#D2E823] border-2 border-[#09090B] rounded-full hard-shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#09090B] animate-pulse" />
            <span className="font-bold text-[10px] uppercase tracking-widest">12+ Partners Active</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container overflow-hidden">
        <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Set 1 */}
          <div className="flex items-center gap-5 px-2.5">
            {partners.map(p => <PartnerChip key={p.name + '1'} {...p} />)}
          </div>
          {/* Set 2 — duplicate for seamless loop */}
          <div className="flex items-center gap-5 px-2.5">
            {partners.map(p => <PartnerChip key={p.name + '2'} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
