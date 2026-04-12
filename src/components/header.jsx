import { Link } from 'react-router-dom'
import "./header.css"

function Header() {

    return (

        <div id = "header">

            <a id = "initials">JC</a>

            <nav id = "header-links">
                <Link to="/">Home</Link>
                <Link to="/professional">Professional</Link>
                <Link to="/sporting">Sporting</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <a href="/James-Clarke-CV.pdf" download id="cv-button">Download CV</a>

        </div>
    )
}

export default Header
