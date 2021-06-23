import { call, put, takeEvery } from '@redux-saga/core/effects';

import products from '@data/products';

export const FETCH_PRODUCTS = 'fetchProductsReducer/FETCH_PRODUCTS';
export const REQUEST_PRODUCTS = 'fetchProductsReducer/REQUEST_PRODUCTS';
export const SHOW_LOADER = 'fetchProductsReducer/SHOW_LOADER';
export const HIDE_LOADER = 'fetchProductsReducer/HIDE_LOADER';

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const getProducts = payload => ({ type: FETCH_PRODUCTS, payload });
export const requestProducts = () => ({ type: REQUEST_PRODUCTS });

const initialState = {
    fetchedProducts: [],
    loading: true
};

const fetchProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, fetchedProducts: action.payload };
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export function* sagaWatcher() {
    yield takeEvery(REQUEST_PRODUCTS, sagaWorker);
}

function* sagaWorker() {
    yield put(showLoader());

    const payload = yield call(fetchData);

    yield put(getProducts(payload));
    yield put(hideLoader());
}

async function fetchData() {
    // const response = await fetch('https://api.myjson.com/bins/17l1k4');
    // const json = await response.json();

    return products.products;
}

export default fetchProductsReducer;
