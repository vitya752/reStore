import React, { Fragment } from 'react';
import CategoriesFilter from './../CategoriesFilter/CategoriesFilter';
import PriceFilter from './../PriceFilter/PriceFilter';
import './Filter.css';

const Filter = () => {
    return (
        <Fragment>
            <CategoriesFilter />
            <PriceFilter />
        </Fragment>
    );
}

export default Filter;