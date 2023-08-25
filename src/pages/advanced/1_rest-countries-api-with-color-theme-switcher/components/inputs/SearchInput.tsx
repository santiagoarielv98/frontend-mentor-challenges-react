import React from "react";
import SearchIcon from "../icons/SearchIcon";
import "./SearchInput.css";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <div className="search">
      <SearchIcon width={20} height={20} />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchInput;
