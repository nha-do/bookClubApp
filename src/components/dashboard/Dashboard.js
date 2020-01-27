import React, { Component } from "react"
import About from './About'
import BookList from '../books/Booklist'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> 
                       <BookList /> 
                    </div>   
                    <div className="col s12 m5 offset-m1"></div>  
                        <About />
                </div>
            </div>
        )
    }
}

export default Dashboard
