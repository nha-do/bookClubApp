const initState = {
    books: [
        {id: '1', title: '21 lessons', author:'bloop'},
        {id: '2', title: 'fuck this', author: 'blap'},
        {id: '3', title: 'keep that', author: 'skdjfhadkjf'}
    ]
}

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SUGGEST_BOOK':
            console.log('suggested book', action.book);
            return state;
        case 'SUGGEST_BOOK_ERROR':
            console.log('suggest book error', action.err);
            return state;
        default:
            return state;
    }
    
}

export default bookReducer 