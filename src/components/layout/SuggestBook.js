import React from "react";
import { NavLink } from "react-router-dom"

const SuggestBook = () => {
    return(
        <ul className="right">
            <li><NavLink to='/suggestbook'>Suggest Book</NavLink></li>
            <li><NavLink to='/bookList'>Book List</NavLink></li>
        </ul>
         
    )
    
}

export default SuggestBook