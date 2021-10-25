import React from 'react';

const ReviewItem = ({product, handleReview}) => {
    const {key, name, price, quantity} = product;
    return (
        <div className='product'>
            {/*<div><img src={img} alt=""/></div>*/}
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleReview(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;
