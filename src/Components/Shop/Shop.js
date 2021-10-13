import React, {useEffect, useState} from 'react';
import "./Shop.css"
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }

    useEffect( ()=>{
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
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
    );
};

export default Shop;
