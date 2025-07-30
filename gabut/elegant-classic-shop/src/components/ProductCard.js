import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button className="view-details-button">View Details</button>
        </div>
    );
};

export default ProductCard;