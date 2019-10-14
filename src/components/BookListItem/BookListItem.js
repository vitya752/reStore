import React from 'react';
import { Link } from 'react-router-dom';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, author, price, img } = book;
    return(
        <div className="book-list-item mb-3">
            <div className="book-cover">
                <img src={img} alt={title} />
            </div>
            <div className="book-details">
                <Link to={`/reStore/${id}`} className="book-title">{title}</Link>
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