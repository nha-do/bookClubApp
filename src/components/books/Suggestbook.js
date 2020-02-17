import React, { Component } from 'react'
import { connect } from 'react-redux'
import {suggestBook } from '../../store/actions/bookActions'
import BookDetails from './Bookdetails'
//import searchBook from './Bookdetails'
import request from 'superagent';

class Suggestbook extends Component {
    
    state = {
        title: '',
        author: '',
        genre: '',
    }
    handleChange = (e) => {
        //console.log(e)
        this.setState({
            [e.target.id]: e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); //prevent page from refreshing when submit button is pressed
        //console.log(this.state)
        this.props.suggestBook(this.state)
        
    }



    render() {
        return (
            <div className="containter col s10 offset-s6">
                <form onSubmit={this.handleSubmit} className="white">
                    <p> </p>
                    <h5 className="grey-text text-darken-3">SuggestBook</h5>
                    <div className="input-field">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">author</label>
                        <input type="text" id="author" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="genre">genre</label>
                        <input type="text" id="genre" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn teal lighten-2 z-depth-0">Submit</button>

                    </div>
                </form>
                
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        suggestBook: (book) => dispatch(suggestBook(book))
    }
}

export default connect(null, mapDispatchToProps)(Suggestbook)
