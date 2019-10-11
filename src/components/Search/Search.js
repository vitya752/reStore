import React, { Component } from 'react';
import { formSubmitSearchTerm } from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchContainer extends Component {
    state = {
        searchTerm: ''
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
            searchTerm: e.target.value
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
        <form 
            className="col-12 col-md-6"
            onSubmit={onSubmit}>
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
                        type="submit" >Search</button>
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