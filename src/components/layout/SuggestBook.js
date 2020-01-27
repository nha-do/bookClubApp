import React from "react";
import { NavLink } from "react-router-dom"

const SuggestBook = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Suggest Book</NavLink></li>
            <li><NavLink to='/'>Book List</NavLink></li>
        </ul>
         
    )
    
}

export default SuggestBook