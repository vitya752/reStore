import React, { Component, Fragment } from 'react';
import SortFilter from './../SortFilter/SortFilter';
import CategoriesFilter from './../CategoriesFilter/CategoriesFilter';
import PriceFilter from './../PriceFilter/PriceFilter';
import './Filter.css';

export default class Filter extends Component {

    state = {
        openFilter: true
    }

    componentDidMount() {
        if( window.innerWidth < 992 ) {
            this.setState({
                openFilter: false
            })
        }
    }

    render() {
        const filter = (
            <div className="filter-wrap">
                <SortFilter />
                <CategoriesFilter />
                <PriceFilter />
            </div> 
        )
        const openFilter = this.state.openFilter ? filter : null;
        return (
            <Fragment>
                <button 
                    className="btn btn-primary btn-filter"
                    onClick={this.onClickFilter}>
                    <i className="icon-filter fa fa-filter"></i>
                    Filter
                    </button>
                {openFilter}
            </Fragment>
        );
    }

    onClickFilter = () => {
        const openFilter = this.state.openFilter;
        this.setState({
            openFilter: !openFilter
        })
    }

}