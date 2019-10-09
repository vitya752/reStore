const updateShoppingCart = (state, action) => {

    if( state === undefined ) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch(action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_DECREASE_CART':
            return updateOrder(state, action.payload, -1);
        case 'BOOK_DELETED_FROM_CART':
            const cartItem = state.shoppingCart.cartItems.find((item) => item.id === action.payload);
            return updateOrder(state, action.payload, -cartItem.count);
        default:
            return state.shoppingCart;
    }
};

const updateCartItem = (book, cartItem = {}, quantity) => {

    const { 
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = cartItem;
    
    return {
        id: id,
        title: title,
        count: count + quantity,
        total: +(total + (quantity*book.price)).toFixed(2)
    }
};

const updateCartItems = (cartItems, newCartItem, cartItemIndex) => {

    if( newCartItem.count === 0 ) {
        return [
            ...cartItems.slice(0, cartItemIndex),
            ...cartItems.slice(cartItemIndex + 1)
        ] 
    }

    if( cartItemIndex === -1 ) {
        return [
            ...cartItems,
            newCartItem          
        ]
    }

    return [
        ...cartItems.slice(0, cartItemIndex),
        newCartItem,
        ...cartItems.slice(cartItemIndex + 1)
    ]
};

const updateOrderTotal = (cartItems) => {
    let result = 0;
    for(let { total } of cartItems) {
        result += total;
    }
    return result;
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems }} = state;
    //ищем книгу по id
    const book = books.find((item) => bookId === item.id );
    //ищем позицию в корзине по id книги, если книга в корзине
    //иначе -1
    const cartItemIndex = cartItems.findIndex(({id}) => id === book.id); 
    //если cartItemIndex === -1, то item = undefined
    const cartItem = cartItems[cartItemIndex];
    const newCartItem = updateCartItem(book, cartItem, quantity);
    const resultCartItems = updateCartItems(cartItems, newCartItem, cartItemIndex);
    return {
        cartItems: resultCartItems,
        orderTotal: updateOrderTotal(resultCartItems)
    }
}

export default updateShoppingCart;