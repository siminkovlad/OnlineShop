import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LeftSideBar } from './LeftSideBar'
import { MainContent } from './MainContent'
import { Loader } from './Loader'

import { requestProducts } from '@store/fetchProductsReducer';

export const Main = () => {
    const loading = useSelector(state => state.data.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestProducts());
    }, []);

    if (loading) return <Loader />;

    return (
        <main>
            <LeftSideBar />
            <Route path="/:userSearch?">
                <MainContent />
            </Route>
        </main>
    );
};
