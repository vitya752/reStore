import updateBookList from './updateBookList';
import updateShoppingCart from './updateShoppingCart';
import updateFilter from './updateFilter';

const reducer = (state, action) => {
    console.log(action.type);
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        filter: updateFilter(state, action)
    }
}

export default reducer;