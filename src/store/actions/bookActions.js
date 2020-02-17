export const suggestBook = (book) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
       // make async call to database
       const firestore = getFirestore();
       firestore.collection('books').add({
           ...book,
           createdAt: new Date(),
       }).then(() => {
        dispatch({ type: 'SUGGEST_BOOK', book });
       }).catch((err) => {
           dispatch({ type: 'SUUGEST_BOOK_ERROR', err});
       })
       
    }
}