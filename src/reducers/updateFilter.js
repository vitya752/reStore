const updateFilter = (state, action) => {

    if( state === undefined ) {
        return {
            searchTerm: '',
            categories: [
                { id: 1, label: 'Post-apocalyptic', name: 'post-apocalyptic', checked: false },
                { id: 2, label: 'Fantasy', name: 'fantasy', checked: false },
                { id: 3, label: 'Horror', name: 'horror', checked: false }
            ],
            checkedCategories: [],
            maxPrice: 100
        }
    }

    switch(action.type) {
        case 'FORM_SUBMIT_SEARCH_TERM':
            return {
                ...state.filter,
                searchTerm: action.payload
            };
        case 'CHECKBOX_CHANGE_STATUS':
            return updateCategories(state, action.payload);
        case 'MAXPRICE_CHANGE_VALUE':
            return {
                ...state.filter,
                maxPrice: action.payload
            };
            default:
            return state.filter;
    }

}

const updateCategories = (state, checkId) => {
    const { filter: { categories } } = state;
    const indexItem = categories.findIndex(({id}) => id === checkId);
    const newCategories = updateCategory(categories, indexItem);
    return {
        ...state.filter,
        categories: newCategories,
        checkedCategories: updateCheckedCategories(newCategories)
    }
};

const updateCategory = (categories, indexItem) => {
    const item = categories[indexItem];
    const newItem = { ...item, checked: !item.checked };
    return [
        ...categories.slice(0, indexItem),
        newItem,
        ...categories.slice(indexItem + 1)
    ]
};

const updateCheckedCategories = (categories) => {
    const checkedCategories = categories.filter(({checked}) => checked === true);
    return checkedCategories.map(({id, name}) => {
        return { 
            id: id, 
            name: name 
        }
    });
};

export default updateFilter;