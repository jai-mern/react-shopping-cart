// App.js
import React, { useState } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import './styles/Product.css'; // Import Product component styles
import './styles/ShoppingCart.css'; // Import ShoppingCart component styles

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (productId) => {
    // Replace this with your logic to add items to the cart
    const updatedCart = [...cartItems, { id: productId, name: `Product ${productId}`, price: 10.99 }];
    setCartItems(updatedCart);
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (productId) => {
    // Replace this with your logic to remove items from the cart
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 29.99 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 39.99 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 49.99 },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 59.99 }
  ];

  return (
    <div className="app">
      <h1 style={{ backgroundColor: 'green', color: 'white' }}>React Shopping Cart</h1>

      <div className="container text-center">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-6 col-sm-4">
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          ))}
        </div>
      </div>
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
