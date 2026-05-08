import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isOnScan = location.pathname === '/scan'

  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-8">
      <nav className="bg-[#F8F4E8] border-2 border-[#09090B] rounded-[12px] flex items-center justify-between px-6 py-4 transition-all duration-300">
        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          className="font-display text-xl md:text-2xl tracking-tighter hover:text-[#D2E823] transition-colors duration-300 cursor-none flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-[#D2E823] border-2 border-[#09090B] rounded-lg flex items-center justify-center">
            <iconify-icon icon="lucide:shield-check" class="text-[#09090B] text-sm" />
          </div>
          <span className="hidden sm:inline">TRUTHSCAN AI</span>
        </Link>

        {/* Nav Links — context aware */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest">
          {isOnScan ? (
            <>
              <Link to="/" className="nav-link cursor-none flex items-center gap-1.5">
                <iconify-icon icon="lucide:layout-dashboard" class="text-xs" />
                Dashboard
              </Link>
              <Link to="/detector" className="nav-link cursor-none flex items-center gap-1.5">
                <iconify-icon icon="lucide:search" class="text-xs" />
                Detector
              </Link>
            </>
          ) : (
            <>
              <Link to="/#detect"    id="nav-detect"    className="nav-link cursor-none">Detect</Link>
              <Link to="/#reports"   id="nav-reports"   className="nav-link cursor-none">Reports</Link>
              <Link to="/#awareness" id="nav-awareness" className="nav-link cursor-none">Awareness</Link>
              <Link to="/#about"     id="nav-about"     className="nav-link cursor-none">About</Link>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/scan"
            id="nav-scan-btn"
            className={`p-2 hard-shadow-sm border-2 border-[#09090B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-300 cursor-none block ${
              isOnScan ? 'bg-[#D2E823]' : 'bg-white hover:bg-[#D2E823]'
            }`}
          >
            <iconify-icon icon="lucide:scan-search" class="text-xl" />
          </Link>
          <Link
            to={isOnScan ? "/" : "/detector"}
            id="nav-auth-btn"
            className="px-5 py-2 hard-shadow-sm border-2 border-[#09090B] bg-[#09090B] text-white hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-300 font-bold uppercase text-xs tracking-widest cursor-none block"
          >
            {isOnScan ? 'DASHBOARD' : 'TRY DETECTOR'}
          </Link>
        </div>
      </nav>
    </header>
  )
}
