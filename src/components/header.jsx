import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/professional">Professional</Link>
            <Link to="/sporting">Sporting</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header
