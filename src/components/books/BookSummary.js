import React from "react"

const BookSummary = ({book}) => {
    return (
        <div className="card z-depth-2 book-summary">
             <div className="card-content grey-text text-darken-3">
                <span className="card-title">{book.title}</span>
            </div>
        </div>

    )
}

export default BookSummary


