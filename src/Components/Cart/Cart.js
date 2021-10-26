import React from 'react';
import './Cart.css';

const Cart = ({cart, children}) => {
    let total = 0;
    for (const product of cart) {
        total += product.price;
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Total: {total}</p>
            {children}
        </div>
    );
};

export default Cart;
