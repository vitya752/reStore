import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <ul className="col-3 list-group genres">
            <li className="list-group-item genres-item">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="category1" />
                    <div className="check-indicator"></div>
                    <label className="form-check-label" htmlFor="category1">
                        Default checkbox
                    </label>
                </div>
            </li>
        </ul>
    )
}

export default Categories;