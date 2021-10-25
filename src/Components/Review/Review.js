import React from 'react';
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

const Review = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>This is review page: {products.length}</h1>
            <h3>Cart: {cart.length}</h3>
        </div>
    );
};

export default Review;
