import React from 'react';
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import {clearTheCart, deleteFromDb} from "../../utilities/fakedb";
import {useHistory} from "react-router-dom";


const Review = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleReview = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder');
        clearTheCart();
        console.log('clocked');
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleReview={handleReview}/>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;
