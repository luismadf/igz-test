import React from "react";
import "./SearchBar.css";

interface Props {
  handleOnChange: any;
}

const SearchBar: React.FC<Props> = ({ handleOnChange }) => {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass search-bar__icon"></i>
      <input type="text" placeholder="Buscar..." onChange={handleOnChange} />
    </div>
  );
};

export default SearchBar;
