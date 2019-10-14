import React, { Fragment } from 'react';
import SortFilter from './../SortFilter/SortFilter';
import CategoriesFilter from './../CategoriesFilter/CategoriesFilter';
import PriceFilter from './../PriceFilter/PriceFilter';
import './Filter.css';

const Filter = () => {
    return (
        <Fragment>
            <SortFilter />
            <CategoriesFilter />
            <PriceFilter />
        </Fragment>
    );
}

export default Filter;