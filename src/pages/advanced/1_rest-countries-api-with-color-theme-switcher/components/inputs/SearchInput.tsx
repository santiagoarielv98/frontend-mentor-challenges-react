import React from "react";
import SearchIcon from "../icons/SearchIcon";
import "./SearchInput.css";

interface SearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <div className="search-input">
      <SearchIcon width={20} height={20} />
      <input
        value={value}
        onChange={onChange}
        className="search-input__input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchInput;
