import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkboxChangeStatus } from './../../actions';
import './Categories.css';

const Categories = ({ categories, checkboxChangeStatus }) => {
    return (
        <ul className="col-12 col-lg-3 list-group genres">
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);