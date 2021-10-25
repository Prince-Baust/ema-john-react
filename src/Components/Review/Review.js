import React from 'react';
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";

const Review = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>This is review page: {products.length}</h1>
                <h3>Cart: {cart.length}</h3>
            </div>

            <div className="cart-container">
                <Cart cart={cart}/>
            </div>

        </div>
    );
};

export default Review;
