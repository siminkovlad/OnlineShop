import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SearchInputStyled } from '@styles/styledComponents/searchStyled';

import { setSortedProducts, setUserSearch } from '@store/filterReducer';

export const Search = () => {
    const fetchedProducts = useSelector(state => state.data.fetchedProducts);
    const search = useSelector(state => state.sort.userSearch);
    const dispatch = useDispatch();

    const searchHandler = e => dispatch(setUserSearch(e.target.value.trim()));

    const submitHandler = () => {
        const sortedProducts = fetchedProducts.filter(item => (
            item.name.toString().toLowerCase().search(search.toLowerCase()) !== -1
        ));

        dispatch(setSortedProducts(sortedProducts));
        dispatch(setUserSearch(''));
    };

    return (
        <div className="search">
            <SearchInputStyled id="search" placeholder="Поиск" name="search" value={search} onChange={searchHandler}/>
            <Link to={`${search}`} onClick={submitHandler}>Найти</Link>
        </div>
    );
};
