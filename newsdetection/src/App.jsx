import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Home from './components/Home'
import DetectorPage from './components/DetectorPage'
import ScanContent from './components/ScanContent'

function App() {
  return (
    <Router>
      {/* Global Elements */}
      <div className="noise-overlay" />
      <Cursor />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detector" element={<DetectorPage />} />
        <Route path="/scan" element={<ScanContent />} />
      </Routes>
    </Router>
  )
}

export default App
