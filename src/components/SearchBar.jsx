import React from "react";
import "./SearchBar.css";

// Controlled input: the value shown always comes from the parent's state,
// and every keystroke is sent back up through the onSearchChange prop.
function SearchBar(props) {
  const { searchTerm, onSearchChange } = props;

  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for dishes, e.g. Pizza, Wrap, Lassi..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
