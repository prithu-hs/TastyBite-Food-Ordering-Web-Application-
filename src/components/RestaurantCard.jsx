import React from "react";
import "./RestaurantCard.css";

function RestaurantCard(props) {
  const { restaurant } = props;

  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />

      <div className="restaurant-card-body">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.cuisine}</p>

        <div className="restaurant-card-meta">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
