import React from 'react';
import './LaptopCart.css'

const LaptopCart = ({laptop}) => {
    const {img, model, seller, price} = laptop;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <p>Seller: {seller}</p>
            <p>Price: $<small>{price}</small></p>
            <p>Model: {model}</p>
            <button className='added-button'>Add to Card</button>
        </div>
    );
};

export default LaptopCart;