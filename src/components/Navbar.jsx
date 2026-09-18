import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Read the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Plain JS reduce to add up all the quantities for the cart badge
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <span className="logo-emoji">🍱</span>
        <span>TastyBite</span>
      </Link>

      <div className="navbar-links">
        <Link to="/home">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
        </Link>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
