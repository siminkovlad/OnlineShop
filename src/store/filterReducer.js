export const SET_USER_SEARCH = 'filterReducer/SET_USER_SEARCH';
export const SET_SORTED_PRODUCTS = 'filterReducer/SET_SORTED_PRODUCTS';

export const setUserSearch = payload => ({ type: SET_USER_SEARCH, payload });
export const setSortedProducts = payload => ({ type: SET_SORTED_PRODUCTS, payload });

export const initialState = {
    userSearch: '',
    sortedProductsList: []
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORTED_PRODUCTS:
            return { ...state, sortedProductsList: action.payload };
        case SET_USER_SEARCH:
            return { ...state, userSearch: action.payload };
        default:
            return state;
    }
};

export default filterReducer;
