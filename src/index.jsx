import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    applyMiddleware,
    createStore
} from 'redux';

import { App } from '@components/App';

import reducer from '@store';
import { sagaWatcher } from '@store/fetchProductsReducer';

import '@styles/main';

const saga = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(saga)
));

saga.run(sagaWatcher);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
