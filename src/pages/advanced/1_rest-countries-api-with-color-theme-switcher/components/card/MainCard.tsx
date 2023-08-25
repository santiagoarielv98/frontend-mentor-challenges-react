import React from "react";
import type { Country } from "../../types/countries";
import "./MainCard.css";

interface MainCardProps {
  country: Country;
}

const MainCard: React.FC<MainCardProps> = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flag} alt={country.name} width={264} height={160} />
      <div>
        <h2>{country.name}</h2>
        <div>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
