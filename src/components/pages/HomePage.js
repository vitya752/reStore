import React from 'react';
import Categories from '../Categories/Categories';
import BookList from '../BookList/BookList';

const HomePage = () => {
    return (
        <div className="row">
            <Categories />
            <BookList />
        </div>
    )
}

export default HomePage;