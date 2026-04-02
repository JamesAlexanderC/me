/* --- Import Standard Stuff --- */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* --- Import Pages --- */
import Home from './pages/home'
import Professional from './pages/professional'
import Sporting from './pages/sporting'
import Contact from './pages/contact'

/* --- Import Components --- */
import Navbar from './components/navbar'
import Footer from './components/footer'

import './app.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/professional" element={<Professional />} />

          <Route path="/sporting" element={<Sporting />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
