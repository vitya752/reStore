import updateBookList from './updateBookList';
import updateShoppingCart from './updateShoppingCart';
import updateFilter from './updateFilter';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        filter: updateFilter(state, action)
    }
}

export default reducer;