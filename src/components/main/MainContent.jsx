import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const MainContent = () => {
    const [productsList, setProductsList] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const fetchedProducts = useSelector(state => state.data.fetchedProducts);
    const sortedProductsList = useSelector(state => state.sort.sortedProductsList);
    const { userSearch } = useParams();

    useEffect(() => {
        setProductsList(sortedProductsList.length ? sortedProductsList : fetchedProducts);
    }, [sortedProductsList]);

    useEffect(() => {
        let products = [];

        if (userSearch === 'Home&Kitchen') {
            products = productsList.filter(item => item.bsr_category === 'Home & Kitchen');
        } else if (userSearch === 'Sports&Outdoors') {
            products = productsList.filter(item => item.bsr_category === 'Sports & Outdoors');
        } else if (userSearch === 'Health&PersonalCare') {
            products = productsList.filter(item => item.bsr_category === 'Health & Personal Care');
        } else if (userSearch === 'BabyProducts') {
            products = productsList.filter(item => item.bsr_category === 'Baby Products');
        } else {
            products = productsList;
        }

        setSortedProducts(products);
    }, [productsList, userSearch]);

    return (
        <div>
            <div className="productsList">
                {sortedProducts.map((item, index) => (
                    <div key={index} className="item">
                        <p>
                            <img src={item.img} alt={item.name} />
                        </p>
                        <p>{item.name.slice(0, 20)}</p>
                        <p>
                            <img src="star.jpg" alt="Рейтинг" className="star" />
                            {item.stars}
                        </p>
                        <p>{item.price}$</p>
                        <a href={item.link} target="_blank">Купить</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
