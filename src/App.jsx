/* --- Import Standard Stuff --- */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* --- Import Pages --- */
import Home from './home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
