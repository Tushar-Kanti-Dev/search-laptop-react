import React from 'react';
import './HomeCart.css';

const HomeCart = ({laptop}) => {
    const {img, name, seller, price} = laptop;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <p>Seller: {seller}</p>
            <p>Price: $<small>{price}</small></p>
        </div>
    );
};

export default HomeCart;