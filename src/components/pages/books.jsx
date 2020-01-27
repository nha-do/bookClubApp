import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


const Books = () => {
    return (
        <div>
            <h2>Suggested Books</h2>
            <ul>
                {["21 lessons", "Dont Fuck", "Mindsight", "Headspace", "missali"].map((user, idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>


            <Link to="/suggestbook">Suggest a Book!</Link>    
            

        </div>
    );
};

export default Books;