import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Home from './components/Home'
import DetectorPage from './components/DetectorPage'

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
      </Routes>
    </Router>
  )
}

export default App
