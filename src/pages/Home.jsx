import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";
import { foodItems, categories } from "../data/foodData";
import { restaurants } from "../data/restaurantData";
import "./Home.css";

function Home() {
  // useState: keeps track of what the user has typed and which
  // category button is currently selected.
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // useMemo: only re-runs the filtering logic when searchTerm,
  // activeCategory, or the underlying data actually change.
  const filteredFoods = useMemo(() => {
    return foodItems.filter((food) => {
      const matchesCategory =
        activeCategory === "All" || food.category === activeCategory;

      const matchesSearch = food.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="home-page">
      <Navbar />

      <div className="hero-banner">
        <h1>Craving something good?</h1>
        <p>Order from your favourite local restaurants in a few taps.</p>
      </div>

      <main className="home-content">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <h2 className="section-heading">Popular dishes</h2>

        {/* Conditional rendering: show a message when nothing matches */}
        {filteredFoods.length === 0 ? (
          <p className="no-results">
            No dishes match "{searchTerm}" in {activeCategory}. Try another
            search or category.
          </p>
        ) : (
          <div className="food-grid">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}

        <h2 className="section-heading">Restaurants near you</h2>

        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
