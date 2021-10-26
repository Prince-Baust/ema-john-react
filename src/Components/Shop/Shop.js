import React, {useEffect, useState} from 'react';
import "./Shop.css"
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDb, getStoredCart} from "../../utilities/fakedb";
import {Link} from "react-router-dom";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        // Add to Local Storage
        addToDb(product.key);
    }

    useEffect( ()=>{
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);  // load all products
                setDisplayProducts(data); //display all products
            })
    }, [])

    useEffect( ()=> {
        if (products.length) {
            const savedCart = getStoredCart();
            let storedCart = [];

            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products])

    const handleSearch = (e) => {
        const searchedItem =  e.target.value;
        let searchProducts = products.filter(product => product.name.toLowerCase().includes(searchedItem.toLowerCase()));
        console.log('from handleSearch',searchProducts.length);
        setDisplayProducts(searchProducts);
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" className="search-input" placeholder="Search Product"/>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart = {handleAddToCart}/>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>

    );
};

export default Shop;
