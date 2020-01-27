import React from "react"
import BookSummary from "./BookSummary"

const BookList = () => {
    return (
        <div className="book-list section">
            <BookSummary />
            <BookSummary />
            <BookSummary />
            <BookSummary />
        </div>
    )
}

export default BookList
