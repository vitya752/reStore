import React from 'react';

const Search = () => {
    return (
        <form>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search"
                    // onChange={this.onChangeTerm}
                    // value={this.state.term}
                    />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" >Search</button>
                    {/* disabled={this.state.disableSubmit} */}
                </div>
            </div>
        </form>
    );
}

export default Search;