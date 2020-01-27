import React from "react";
import {Link} from "react-router-dom";


//import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

//import Books from "./pages/books";
//import Suggest from "./pages/suggestbook";


const MainPage = () => {

    return (
        
        <div>
            <h1>Welcome to the Book Club!</h1>
            
            <h4><Link to="/books">Show list of books</Link></h4>
            <h4><Link to="/suggestbook">Suggest a book!</Link></h4>
            <small>Main Page</small>
        </div>
        

       /* 
       <Router>
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <Link to="/" className="navbar-brand">Book Club App</Link>
           <div className="collpase navbar-collapse">
             <ul className="navbar-nav mr-auto">
               <li className="navbar-item">
                 <Link to="/books" className="nav-link">Books</Link>
               </li>
               <li className="navbar-item">
                 <Link to="/suggestbooks" className="nav-link">Suggest a Book!</Link>
               </li>
             </ul>
           </div>
         </nav>
         <br/>
         <Route path="/" exact component={MainPage} />
         <Route path="/books" component={Books} />
         <Route path="/suggestbooks" component={Suggest} />
       </div>
     </Router>
        */

    );

};

export default MainPage;