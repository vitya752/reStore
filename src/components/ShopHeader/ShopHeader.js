import React from 'react';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';
import './ShopHeader.css';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="row shop-header mb-3">
            <Link to="/reStore" className="col-12 col-md-3 logo text-dark">BookStore</Link>
            <Search />
            <Link to="/reStore/cart">
                <i className="col-12 col-md-3 icon-cart fa fa-shopping-cart"></i>
                {numItems} items (${total})
            </Link>
        </header>
    );
}

export default ShopHeader;