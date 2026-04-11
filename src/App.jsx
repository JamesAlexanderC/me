/* --- Import Standard Stuff --- */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* --- Import Pages --- */
import Home from './pages/home'
import Professional from './pages/professional'
import Sporting from './pages/sporting'
import Gallery from './pages/gallery'
import Contact from './pages/contact'

/* --- Import Components --- */
import Header from './components/header'
import Footer from './components/footer'

import './app.css'

function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/professional" element={<Professional />} />

          <Route path="/sporting" element={<Sporting />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
        
      </Router>
    </div>
  )
}

export default App
