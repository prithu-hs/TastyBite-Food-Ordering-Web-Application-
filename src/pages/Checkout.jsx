import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { clearCart } from "../redux/cartSlice";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Controlled form fields
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [error, setError] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (!fullName || !address || !phone) {
      setError("Please fill in all the delivery details.");
      return;
    }

    setError("");

    // Order is "placed" - clear the cart in Redux and move to confirmation
    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="checkout-empty">
          <h2>There's nothing to check out yet.</h2>
          <button onClick={() => navigate("/home")}>Go to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <h2>Delivery Details</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Delivery Address</label>
              <input
                type="text"
                placeholder="House no, street, city"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
              >
                <option>Cash on Delivery</option>
                <option>UPI</option>
                <option>Credit / Debit Card</option>
              </select>
            </div>

            {error && <p className="checkout-error">{error}</p>}

            <button type="submit" className="place-order-button">
              Place Order · ₹{total}
            </button>
          </form>

          <div className="checkout-summary">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
