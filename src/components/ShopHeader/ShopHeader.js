import React from 'react';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';
import './ShopHeader.css';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="shop-header mb-3">
            <Link to="/" className="logo text-dark">ReStore</Link>
            <Search />
            <Link to="/cart">
                <i className="icon-cart fa fa-shopping-cart"></i>
                {numItems} items (${total})
            </Link>
        </header>
    );
}

export default ShopHeader;