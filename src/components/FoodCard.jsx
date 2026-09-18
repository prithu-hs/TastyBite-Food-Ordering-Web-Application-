import React from "react";
import { Link } from "react-router-dom";
import "./FoodCard.css";

// A "presentational" component - it receives data through props
// and does not manage any state of its own.
function FoodCard(props) {
  const { food } = props;

  return (
    <Link to={`/food/${food.id}`} className="food-card-link">
      <div className="food-card">
        <img src={food.image} alt={food.name} className="food-card-image" />

        <div className="food-card-body">
          <h3>{food.name}</h3>
          <p className="food-card-restaurant">{food.restaurant}</p>

          <div className="food-card-meta">
            <span className="food-card-rating">⭐ {food.rating}</span>
            <span className="food-card-time">{food.deliveryTime}</span>
          </div>

          <p className="food-card-price">₹{food.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default FoodCard;
