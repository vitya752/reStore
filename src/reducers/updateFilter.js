const updateFilter = (state, action) => {

    if( state === undefined ) {
        return {
            searchTerm: '',
            checkedCategories: []
        }
    }

    switch(action.type) {
        case 'FORM_SUBMIT_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state.filter;
    }

}

export default updateFilter;