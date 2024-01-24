// Product.js
import React from 'react';

const Product = ({ id, name, description, price, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button className="add-to-cart" onClick={() => onAddToCart(id)}>Add to Cart</button>
      <button className="remove-from-cart" onClick={() => onRemoveFromCart(id)}>Remove from Cart</button>
    </div>
  );
};

export default Product;
