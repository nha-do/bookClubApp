import React from "react"
import BookSummary from "./BookSummary"
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react"


const BookList = ({books}) => {
    
    return (
        <div className="book-list section">
            { books && books.map(book => {
                return (
                    <Link to={'/book/' + book.id}>
                        <BookSummary book={book} key={book.id} />
                    </Link>
                    
                )
            })}
        </div>
    )

    
}


export default BookList 

 