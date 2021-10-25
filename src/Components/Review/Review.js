import React from 'react';
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem product={product}/>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}/>
            </div>

        </div>
    );
};

export default Review;
