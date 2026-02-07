import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty 🛒</h2>
        <button
          className="get-started-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} className="cart-item-image" />

          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>

            <div className="cart-item-quantity">
              <button
                onClick={() =>
                  dispatch(updateQuantity({
                    name: item.name,
                    quantity: item.quantity - 1,
                  }))
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(updateQuantity({
                    name: item.name,
                    quantity: item.quantity + 1,
                  }))
                }
              >
                +
              </button>
            </div>

            <button
              className="cart-item-delete"
              onClick={() => dispatch(removeItem(item.name))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button className="get-started-button1">Checkout</button>
    </div>
  );
};

export default CartItem;
