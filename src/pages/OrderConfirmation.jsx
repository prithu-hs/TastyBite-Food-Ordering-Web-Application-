import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const navigate = useNavigate();

  // useState with an initializer function so the random order id
  // is generated only once, on the first render.
  const [orderId] = useState(
    () => `TB${Math.floor(100000 + Math.random() * 900000)}`,
  );

  return (
    <div>
      <Navbar />

      <div className="confirmation-page">
        <div className="confirmation-card">
          <div className="success-icon">✅</div>

          <h1>Order Placed Successfully!</h1>
          <p>
            Thank you for ordering with TastyBite. Your food is being
            prepared and will be delivered soon.
          </p>

          <div className="order-id-box">
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <button className="home-button" onClick={() => navigate("/home")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
