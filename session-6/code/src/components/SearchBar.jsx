import React from "react";

const SearchBar = ({ value, change }) => {
  return (
    <input
      style={{ marginBottom: "20px", padding: "6px" }}
      placeholder="Search..."
      value={value}
      onChange={(e) => change(e.target.value)}
    />
  );
};

export default SearchBar;
