/* --- Navbar Component --- */

import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">

            <h3>James Clarke</h3>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/professional">Professional</Link></li>
                <li><Link to="/sporting">Sporting</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar