import React from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//import GoogleAPI from './googleAPI'
import request from 'superagent';

/*const searchBook = (title, author) => {
    
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q : title })
        .query({ inauthor : author })
        .then((data) => {
            //console.log(data['body']['items'][0]['volumeInfo']);
            console.log(data['body']['items'][0]['volumeInfo']['description']);
            //return(data.body.items)
            return(<div>data['body']['items'][0]['volumeInfo']['description']</div>)
            //return(<div>{data['body']['items'][0]['volumeInfo']['description']}</div>)
            //return(data['body']['items'][0]['volumeInfo']['imageLinks']['thumbnail']) 
        
        })
    
}  */


const searchBook = (book) => {
    
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q : book.title })
    .query({ inauthor : book.author })
    .then((data) => {
        //console.log(data['body']['items'][0]['volumeInfo']);
        console.log(data['body']['items'][0]['volumeInfo']['description']);
        //return(data.body.items)
        //return(<div>data['body']['items'][0]['volumeInfo']['description']</div>)
        //return(<div>{data['body']['items'][0]['volumeInfo']['description']}</div>)
        //return(data['body']['items'][0]['volumeInfo']['imageLinks']['thumbnail']) 
        //this.setState({description: [...data.body.items]});
    
    })

}   

/*var img = document.createElement('img');    // Create an <img> element.
img.src = arrItems[i].Image; */
 


const BookDetails = (props) => {
    const { book } = props;
    if (book) {
        
        return(
            <div className="container section book-details">
                <div className="card z-depth-0">
                    <div className="card-content"> 
                        <span className="card-title">{ book.title }</span>
                        {/*<img src={ searchBook(book.title, book.author) } atl=""/>*/}
                        {/*<p>Description: { searchBook(book.title, book.author) }</p>*/}
                        <p>Description: {searchBook(book)}</p>
                        <p>image</p> 
                        <p>Author: { book.author }</p> 
                    </div>
                    
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Genre: { book.genre }</div>
                    </div> 

                </div>
            </div>
        )
    } else{
        return (
            <div className="container center">
                <p>Loading book...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const books = state.firestore.data.books;
    const book = books ? books[id] : null
    return{
        book: book
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books' }
    ])

)(BookDetails)