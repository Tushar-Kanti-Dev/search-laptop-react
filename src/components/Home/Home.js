import React from 'react';
import useLaptops from '../../hooks/useLaptops';
import HomeCart from '../HomeCart/HomeCart';

import './Home.css'

const Home = () => {
    const [laptops, setLaptops] = useLaptops();

    return (
        <div>
            <h2>Total Laptop {laptops.length}</h2>
            <div className="home-cart-container">
                {
                    laptops.map(laptop => <HomeCart
                        key={laptop.id}
                        laptop ={laptop}
                    ></HomeCart>)
                }
            </div>
        </div>
    );
};

export default Home;