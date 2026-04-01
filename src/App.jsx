/* --- Import Standard Stuff --- */
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

/* --- Import Pages --- */
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route path="/"> <Home /> </Route>
    </Router>
  )
}

export default App
