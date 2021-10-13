import React, {useEffect, useState} from 'react';
import "./Shop.css"
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="shop-container">
          <div className="product-container">
              {
                  products.map(product => <Product key={product.key} product={product}/>)
              }
          </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h4>Items Ordered: </h4>
            </div>
        </div>
    );
};

export default Shop;
