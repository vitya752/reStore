import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    bookAddedToCart, 
    bookDecreaseCart, 
    bookDeletedFromCart } from './../../actions';
import './ShoppingCartTable.css';

const ShoppingCartTable = ({ items, total, bookAddedToCart, bookDecreaseCart, bookDeletedFromCart }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return(
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button 
                        onClick={ () => bookAddedToCart(id) }
                        className="btn btn-outline-success">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button 
                        onClick={ () => bookDeletedFromCart(id) }
                        className="btn btn-outline-danger">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button 
                        onClick={ () => bookDecreaseCart(id) }
                        className="btn btn-outline-warning">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </td>
            </tr>
        )
    };

    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx) => renderRow(item, idx))
                    }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        bookDeletedFromCart,
        bookAddedToCart,
        bookDecreaseCart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);