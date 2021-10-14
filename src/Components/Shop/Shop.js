import React, {useEffect, useState} from 'react';
import "./Shop.css"
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDb, getStoredCart} from "../../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        // Add to Local Storage
        addToDb(product.key);
    }

    useEffect( ()=>{
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( ()=> {
        if (products.length) {
            const storedCart = getStoredCart();
            let savedCart = [];
            for (const key in storedCart) {
                const addedProduct = products.find(product => product.key === key);
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    },[products])

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search Product"/>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart = {handleAddToCart}/>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}/>
                </div>
            </div>
        </>

    );
};

export default Shop;
