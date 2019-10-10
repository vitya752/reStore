const updateFilter = (state, action) => {

    if( state === undefined ) {
        return {
            searchTerm: '',
            categories: [
                { label: 'Post-apocalyptic', name: 'post-apocalyptic', checked: false },
                { label: 'Fantasy', name: 'fantasy', checked: false },
                { label: 'Horror', name: 'horror', checked: false }
            ],
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