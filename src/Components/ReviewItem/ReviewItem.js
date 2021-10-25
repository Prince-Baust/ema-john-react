import React from 'react';

const ReviewItem = ({product}) => {
    const {name, price, quantity, img} = product;
    return (
        <div className='product'>
            {/*<div><img src={img} alt=""/></div>*/}
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;
