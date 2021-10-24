import React from 'react';
import useProducts from "../../hooks/useProducts";

const Review = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>This is review page: {products.length}</h1>
        </div>
    );
};

export default Review;
