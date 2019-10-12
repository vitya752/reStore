import React, { Component } from 'react';
import Slider from 'react-input-slider';
import './PriceFilter.css';

class PriceFilter extends Component {

    state = {
        price: 10
    }

    render() {
        return (
            <div className="filter mb-3">
                <span className="name-filter">Max price: ${this.state.price}</span>
                <Slider
                    className="price-filter"
                    axis="x"
                    x={this.state.price}
                    onChange={({x}) => this.setState({ price: x })}                    
                    />
            </div>
        )
    }
}

export default PriceFilter;