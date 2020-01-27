import React from "react";
import { Link } from "react-router-dom"
import SuggestBook from './SuggestBook'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">BookClub</Link>
                <SuggestBook />
            </div>
        </nav>
    )
    
}

export default Navbar