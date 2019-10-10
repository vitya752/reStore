import React, { Component } from 'react';
import { formSubmitSearchTerm } from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchContainer extends Component {
    state = {
        searchTerm: '',
        disableSubmit: true
    }

    render() {
        return (
            <Search 
                onSubmit={this.onSubmit} 
                onChangeTerm={this.onChangeTerm} 
                searchTerm={this.state.searchTerm}
                disableSubmit={this.state.disableSubmit} />
        );
    }

    onChangeTerm = (e) => {
        this.setState({
            searchTerm: e.target.value,
            disableSubmit: e.target.value.length > 0 ? false : true
        })
    }

    onSubmit = (e) => {
        const { formSubmitSearchTerm } = this.props;
        e.preventDefault();
        formSubmitSearchTerm(this.state.searchTerm);
    }

}

const Search = ({ onSubmit, onChangeTerm, searchTerm, disableSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search"
                    onChange={onChangeTerm}
                    value={searchTerm}
                    />
                <div className="input-group-append">
                    <button 
                        className="btn btn-primary" 
                        type="submit"
                        disabled={disableSubmit} >Search</button>
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        formSubmitSearchTerm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);