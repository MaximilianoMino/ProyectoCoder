import React from "react";
import "./search.css";
const Search = ({ setText, handleSearch }) => {
  return (
    <div className="search-container">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="¿Que estas buscando?"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" className="search-btn" onClick={handleSearch}>
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
