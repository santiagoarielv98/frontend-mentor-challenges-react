import React from "react";
import SearchIcon from "../icons/SearchIcon";
import "./SearchInput.css";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className="search-input">
      <SearchIcon width={20} height={20} />
      <input className="search-input__input" type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchInput;
