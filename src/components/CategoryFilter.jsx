import React from "react";
import "./CategoryFilter.css";

// Renders one button per category using map(), and highlights
// whichever one is currently selected.
function CategoryFilter(props) {
  const { categories, activeCategory, onCategoryChange } = props;

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            category === activeCategory
              ? "category-button active"
              : "category-button"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
