import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkboxChangeStatus } from '../../actions';
import './CategoriesFilter.css';

const CategoriesFilter = ({ categories, checkboxChangeStatus }) => {
    return (
        <div className="filter mb-3">
            <span className="name-filter">Genres</span>
            <ul className="list-group genres mb-3">
                {
                    categories.map(({ id, label, name, checked }, idx) => {
                        return (
                            <li 
                                key={idx}
                                className="list-group-item genres-item">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        value={name} 
                                        id={name}
                                        onChange={(event) => onChangeCheckbox(event, checkboxChangeStatus, id)}
                                        checked={checked} />
                                    <div className="check-indicator"></div>
                                    <label className="form-check-label" htmlFor={name}>
                                        {label}
                                    </label>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

const onChangeCheckbox = (e, checkboxChangeStatus, id) => {
    checkboxChangeStatus(id);
}

const mapStateToProps = (state) => {
    return {
        categories: state.filter.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        checkboxChangeStatus
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);