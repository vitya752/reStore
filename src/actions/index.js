const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookDeletedFromCart = (bookId) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: bookId
    }
}

const bookDecreaseCart = (bookId) => {
    return {
        type: 'BOOK_DECREASE_CART',
        payload: bookId
    }
}

const formSubmitSearchTerm = (searchTerm) => {
    return {
        type: 'FORM_SUBMIT_SEARCH_TERM',
        payload: searchTerm
    }
}

const checkboxChangeStatus = (name) => {
    return {
        type: 'CHECKBOX_CHANGE_STATUS',
        payload: name
    }
}

const maxPriceChangeValue = (value) => {
    return {
        type: 'MAXPRICE_CHANGE_VALUE',
        payload: value
    }
}

export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    bookDeletedFromCart,
    bookDecreaseCart,
    formSubmitSearchTerm,
    checkboxChangeStatus,
    maxPriceChangeValue
}