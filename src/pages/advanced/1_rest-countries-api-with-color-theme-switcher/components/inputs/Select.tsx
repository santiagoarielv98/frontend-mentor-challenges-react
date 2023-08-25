import React from "react";
import "./Select.css";

interface SelectProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      <option value="" hidden>
        Filter by Region
      </option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Select;
