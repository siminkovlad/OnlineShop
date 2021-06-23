import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setSortedProducts, setUserSearch } from '@store/filterReducer';

export const LeftSideBar = () => {
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const fetchedProducts = useSelector(state => state.data.fetchedProducts);
    const sortedProductsList = useSelector(state => state.sort.sortedProductsList);
    const dispatch = useDispatch();

    useEffect(() => {
        const categories = [];

        for (let i = 0; i < fetchedProducts.length; i++) {
            if (!categories.includes(fetchedProducts[i]['bsr_category'])) {
                categories.push(fetchedProducts[i]['bsr_category']);
            }
        }

        setFilteredCategories(categories);
    }, []);

    useEffect(() => {
        setProductsList(sortedProductsList.length ? sortedProductsList : fetchedProducts);
    }, [sortedProductsList]);

    const priceHandler = e => {
        const price = e.target.value.trim();
        const payload = productsList.filter(item => item.price <= price);

        if (payload.length) dispatch(setSortedProducts(payload));
    };

    const reset = () => {
        dispatch(setSortedProducts(fetchedProducts));
        dispatch(setUserSearch(''));
    };

    return (
        <aside>
            <div>
                <section>
                    <h1>Категории:</h1>
                    <ul>
                        {filteredCategories.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${item.split(' ').join('')}`}>{item}</Link>
                                </li>
                            )
                        )}
                    </ul>
                </section>
                <section>
                    <h1>Цена:</h1>
                    <div className="price">
                        Товары до: <input type="number" step="1" min="1" onChange={priceHandler} />
                    </div>
                </section>
                <Link to="/" onClick={reset}>На главную</Link>
            </div>
        </aside>
    );
};
