import bookReducer from './bookreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    book: bookReducer,
    firestore: firestoreReducer
});

export default rootReducer