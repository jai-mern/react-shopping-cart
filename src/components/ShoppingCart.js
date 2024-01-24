// ShoppingCart.js
const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems?.map((item) => (
            <li key={item.id}>
              {item.name} - <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ShoppingCart;
  