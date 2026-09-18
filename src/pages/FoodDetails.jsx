import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { foodItems } from "../data/foodData";
import { addToCart } from "../redux/cartSlice";
import "./FoodDetails.css";

function FoodDetails() {
  // useParams reads the ":id" part of the URL, e.g. /food/5
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Array method find() to locate the matching food by id.
  // Number() converts the string route param to a number for comparison.
  const selectedFood = foodItems.find((food) => food.id === Number(id));

  // Conditional rendering: handle an invalid/unknown id gracefully
  if (!selectedFood) {
    return (
      <div>
        <Navbar />
        <div className="not-found">
          <h2>Food item not found</h2>
          <button onClick={() => navigate("/home")}>Go Home</button>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = selectedFood.price * quantity;

  const handleAddToCart = () => {
    dispatch(addToCart({ food: selectedFood, quantity }));
    setJustAdded(true);

    // Reset the "Added!" message after a short delay
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div>
      <Navbar />

      <div className="food-details-page">
        <button className="back-button" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>

        <div className="food-details-card">
          <div className="food-details-image">
            <img src={selectedFood.image} alt={selectedFood.name} />
          </div>

          <div className="food-details-content">
            <span className="food-badge">{selectedFood.category}</span>

            <h1>{selectedFood.name}</h1>
            <p className="food-restaurant">from {selectedFood.restaurant}</p>

            <div className="rating">⭐ {selectedFood.rating}</div>

            <p className="food-description">{selectedFood.description}</p>

            <h2 className="food-price">₹{selectedFood.price}</h2>

            <div className="quantity-section">
              <p>Quantity</p>
              <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>

            <div className="total-section">
              <span>Total</span>
              <strong>₹{totalPrice}</strong>
            </div>

            <button className="cart-button" onClick={handleAddToCart}>
              {justAdded ? "✓ Added to Cart" : "🛒 Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
