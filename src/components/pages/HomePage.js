import React from 'react';
import Filter from './../Filter/Filter';
import BookList from '../BookList/BookList';

const HomePage = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-3">
                <Filter />
            </div>
            <div className="col-12 col-lg-9">
                <BookList />
            </div>
        </div>
    )
}

export default HomePage;