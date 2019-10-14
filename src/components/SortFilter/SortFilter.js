import React from 'react';
import { sortChangeValue } from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const SortFilter = ({ sortTypes, selectedSort, sortChangeValue }) => {
    const renderSortTypes = sortTypes.map((item) => {
        return (
            <option key={item.value} value={item.value}>{item.label}</option>
        );
    });
    return (
        <div className="filter mb-3">
            <h2 className="name-filter">Sort</h2>
            <select 
                className="form-control select-custom" 
                onChange={(e) => onChangeSort(e, sortChangeValue)}
                value={selectedSort}>
                { renderSortTypes }
            </select>
        </div>
    );
};

const onChangeSort = (e, sortChangeValue) => {
    sortChangeValue(e.target[e.target.selectedIndex].value);
};

const mapStateToProps = (state) => {
    return {
        sortTypes: state.filter.sortTypes,
        selectedSort: state.filter.selectedSort
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sortChangeValue
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SortFilter);