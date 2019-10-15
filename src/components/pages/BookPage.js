import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookAddedToCart } from './../../actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import './BookPage.css';

class BookPageContainer extends Component {

    state = {
        id: null,
        title: '',
        author: '',
        description: '',
        price: null,
        img: null
    }

    componentDidMount() {
        const { bookId, bookstoreService } = this.props;
        bookstoreService.getBook(bookId)
            .then((book) => {
                this.setState({
                    id: bookId,
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    price: book.price,
                    img: book.img
                })
            });
    }

    render() {
        const { id, title, author, price, description, img } = this.state;
        const { bookAddedToCart } = this.props;
        return (
            <BookPage 
                id={id}
                title={title}
                author={author}
                price={price}
                description={description}
                img={img}
                bookAddedToCart={bookAddedToCart} />
        );
    }
}

const BookPage = ({ id, title, author, price, description, img, bookAddedToCart }) => {
    console.log(id);
    return (
        <div className="card">
            <div className="card-header">
                {title} - {author}
            </div>
            <div className="card-body">
                <img className="card-img-top card-img-custom" src={img} alt={title} />
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <p className="card-text">{description}</p>
                <button 
                    onClick={() => bookAddedToCart(+id)}
                    className="btn btn-info add-to-cart">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        bookAddedToCart
    }, dispatch);
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookPageContainer));