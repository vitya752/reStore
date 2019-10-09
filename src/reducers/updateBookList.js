const updateBookList = (state, action) => {

    if( state === undefined ) {
        return {
            books: [],
            loading: true,
            error: null
        }
    }

    switch(action.type) {
        case 'BOOKS_REQUESTED': 
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            } 
        default:
            return state.bookList;      
    }
};

export default updateBookList;