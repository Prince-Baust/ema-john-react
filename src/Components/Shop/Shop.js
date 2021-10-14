import React, {useEffect, useState} from 'react';
import "./Shop.css"
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDb, getStoredCart} from "../../utilities/fakedb";

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
                setProducts(data);
                setDisplayProducts(data);
            })
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
                    <Cart cart = {cart}/>
                </div>
            </div>
        </>

    );
};

export default Shop;
