import React, { useState } from "react";
import Search from "./search/Search";

const FilterProducts = ({ setSearch }) => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    setSearch(text);
  };

  return (
    <div>
      <Search setText={setText} handleSearch={handleSearch} />
    </div>
  );
};

export default FilterProducts;
