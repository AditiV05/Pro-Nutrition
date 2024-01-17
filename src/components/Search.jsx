import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="searchInput">Search:</label>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter a food item"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
