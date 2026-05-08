export default function Footer() {
  return (
    <footer id="about" className="bg-[#09090B] text-[#F8F4E8] py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(210,232,35,0.5) 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl mb-6 tracking-tighter flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D2E823] border-2 border-[#D2E823] rounded-lg flex items-center justify-center">
                <iconify-icon icon="lucide:shield-check" class="text-[#09090B] text-lg" />
              </div>
              TRUTHSCAN AI
            </h2>
            <p className="text-[#F8F4E8]/60 font-medium mb-8">
              AI-powered platform for detecting misinformation, analyzing credibility, and combating fake news with real-time verification technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#F8F4E8]/20 hover:bg-[#D2E823] hover:text-[#09090B] hover:border-[#D2E823] transition-all cursor-none">
                <iconify-icon icon="mdi:github" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#F8F4E8]/20 hover:bg-[#D2E823] hover:text-[#09090B] hover:border-[#D2E823] transition-all cursor-none">
                <iconify-icon icon="mdi:twitter" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#F8F4E8]/20 hover:bg-[#D2E823] hover:text-[#09090B] hover:border-[#D2E823] transition-all cursor-none">
                <iconify-icon icon="mdi:linkedin" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <span className="font-mono text-xs text-[#D2E823] block mb-6">[TOOLS]</span>
            <ul className="space-y-4">
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">DETECTION</a></li>
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">ANALYTICS</a></li>
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">RESOURCES</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="font-mono text-xs text-[#D2E823] block mb-6">[INFO]</span>
            <ul className="space-y-4">
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">API DOCS</a></li>
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">PRIVACY</a></li>
              <li><a href="#" className="uppercase font-bold tracking-widest hover:text-[#D2E823] transition-colors cursor-none text-sm">SUPPORT</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-[#D2E823] block mb-6">[THREAT ALERTS]</span>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="w-full bg-transparent border-2 border-[#F8F4E8]/20 px-6 py-4 focus:border-[#D2E823] outline-none font-bold placeholder:text-[#F8F4E8]/30 uppercase text-[#F8F4E8]" 
                />
              </div>
              <button className="w-full py-4 bg-[#D2E823] text-[#09090B] font-display text-xl border-2 border-[#D2E823] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hard-shadow-md transition-all cursor-none btn-press">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#F8F4E8]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F8F4E8]/40 text-sm font-mono">©2024 TRUTHSCAN AI. MISINFORMATION DETECTION TECHNOLOGY.</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs uppercase">System: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
