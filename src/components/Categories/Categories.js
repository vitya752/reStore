import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkboxChangeStatus } from './../../actions';
import './Categories.css';

const Categories = ({ categories, checkboxChangeStatus }) => {
    console.log(categories);
    return (
        <ul className="col-3 list-group genres">
            {
                categories.map(({ label, name, checked }, idx) => {
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
                                    onChange={(event) => onChangeCheckbox(event, checkboxChangeStatus)}
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
    )
}

const onChangeCheckbox = (e, checkboxChangeStatus) => {
    console.log(e.target.value)
    checkboxChangeStatus(e.target.value);
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);