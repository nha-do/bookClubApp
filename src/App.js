import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div classname="App">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

 
//import Books from '../components/Books';
/*
//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import Books from "./pages/books";
import Suggest from "./pages/suggestbook";

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/404" component={NotFoundPage}/>
      <Route exact path="/books" component={Books}/>
      <Route exact path="/suggestbook" component={Suggest}/>  
      <Redirect to="/404"/>
      </Switch>      
      
      
    </Router>

    );
  }
}
*/

/*
function App() {
  return (
    <div className="App">
      <h1>Book Club</h1>
      <h2>Theme of the Month:</h2>
      <h2>--</h2>
      <h2>Suggested Books</h2>
      <button>Current Suggestions</button>
      <h2>WhenToMeet</h2>
      <button>Enter Availability</button>
  
    </div>
  );
}
*/

export default App;


