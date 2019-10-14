import React from 'react';
import Slider from 'react-input-slider';
import './PriceFilter.css';
import { maxPriceChangeValue } from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PriceFilter = ({ maxPrice, maxPriceChangeValue }) => {
    return (
        <div className="filter mb-3">
            <span className="name-filter">Max price: ${maxPrice}</span>
            <Slider
                xmax={100}
                className="price-filter"
                axis="x"
                x={maxPrice}
                onChange={({x}) => maxPriceChangeValue(x)}                    
                />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        maxPrice: state.filter.maxPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        maxPriceChangeValue
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);