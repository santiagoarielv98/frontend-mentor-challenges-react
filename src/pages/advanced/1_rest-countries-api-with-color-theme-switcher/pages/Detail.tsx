import React from "react";
import { useLoaderData } from "react-router-dom";
import { Country } from "../types/countries";

import "./Detail.css";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";

export interface DetailProps {}

export const Detail: React.FC<DetailProps> = () => {
  const country = useLoaderData() as Country | undefined;

  if (!country) {
    return "null";
  }

  return (
    <div className="detail__container">
      <div>
        <button className="btn">
          <ArrowLeftIcon width={18} height={18} />
          <span>Back</span>
        </button>
      </div>
      <div className="detail__card">
        <img src={country.flag} alt={country.name} width="560" />
        <div className="detail__card__content">
          <h1>{country.name}</h1>
          <div className="detail__card__content__info">
            <div>
              <p>
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {country.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong> {country.currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <strong>Languages:</strong> {country.languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
