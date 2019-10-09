import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, img } = book;
    return(
        <div className="book-list-item mb-3">
            <div className="book-cover">
                <img src={img} alt={title} />
            </div>
            <div className="book-details">
                <span className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button 
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">
                    Add to cart
                    </button>
            </div>
        </div>
    )
}

export default BookListItem;