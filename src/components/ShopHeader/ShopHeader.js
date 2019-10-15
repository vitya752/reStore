import React from 'react';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';
import './ShopHeader.css';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="row align-items-center shop-header mb-3">
            <Link to="/reStore" className="col-6 col-lg-3 logo text-dark">BookStore</Link>
            <Search />
            <Link to="/reStore/cart" className="order text-right col-6 order-1 order-lg-0 col-lg-3">
                <i className="icon-cart fa fa-shopping-cart"></i>
                {numItems} items (${total})
            </Link>
        </header>
    );
}

export default ShopHeader;