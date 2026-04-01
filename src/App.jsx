/* --- Import Standard Stuff --- */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* --- Import Pages --- */
import Home from './pages/home'

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

          <Route path="/professional" element={<div><h1>Professional Page</h1></div>} />

          <Route path="/sporting" element={<div><h1>Sporting Page</h1></div>} />

          <Route path="/contact" element={<div><h1>Contact Page</h1></div>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
