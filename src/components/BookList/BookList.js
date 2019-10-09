import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withBookstoreService from './../hoc/with-bookstore-service';
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from './../../actions';
import './BookList.css';
import Spinner from './../Spinner/Spinner';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator';

class BookListContainer extends Component {

    componentDidMount() {
        const { bookstoreService, 
                booksLoaded, 
                booksRequested, 
                booksError } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const { books, error, loading, bookAddedToCart } = this.props;
        if( error ) {
            return <ErrorIndicator />
        }
        if( loading ) {
            return <Spinner />
        }
        return(
            <BookList books={books} onAddedToCart={bookAddedToCart} />
        )
    }
}

const BookList = ({books, onAddedToCart}) => {
    return(
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                onAddedToCart={() => onAddedToCart(book.id)}
                                book={book} />
                        </li>
                    )
                })
            }
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error
        /* 
        передать свойство books в компонент (this.props.books), 
        значение которого взято из state
        */
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
        booksRequested,
        booksError,
        bookAddedToCart
    }, dispatch);
};
/*
Первый аргумент: обьект с action creators, 
которые будут нужны в этом компоненте!!!
Как только мы вызовем booksLoaded, то bindActionCreators 
создаст действие и передаст все в метод dispatch

Альтернатива:
const mapDispatchToProps = {
    booksLoaded
}
*/

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));