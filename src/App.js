import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Services, About, Contact } from './pages'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App