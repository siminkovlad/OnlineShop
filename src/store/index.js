import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import fetchProductsReducer from './fetchProductsReducer';

const reducer = combineReducers({
    data: fetchProductsReducer,
    sort: filterReducer
});

export default reducer;
