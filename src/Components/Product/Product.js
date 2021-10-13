import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const {img, name, seller, stock, price} = product;

    return (

        <div className='product'>
            <img src={img} alt=""/>
            <div>
                <h2 className='product-name'>{name}</h2>
                <p><small>by {seller}</small></p>
                <h2>${price}</h2>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> handleAddToCart(product)} className='btn-regular'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;
