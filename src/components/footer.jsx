import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {

    return (
        <div id = "footer">

            <nav id = "footer-links">
                <Link to="/">Github</Link>
                <Link to="/">Linkedin</Link>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Strava</Link>
            </nav>

            <p id = "copy">© James Clarke 2026</p>

        </div>
    )
}

export default Footer;