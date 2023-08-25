import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Country } from "../types/countries";

import "./Detail.css";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { path } from "..";

export interface DetailProps {}

export const Detail: React.FC<DetailProps> = () => {
  const navigate = useNavigate();
  const country = useLoaderData() as Country | undefined;

  if (!country?.name) {
    return "null";
  }

  return (
    <div className="detail__container">
      <div>
        <button
          className="btn"
          onClick={() => {
            navigate(`/advanced/${path}`);
          }}
        >
          <ArrowLeftIcon width={18} height={18} />
          <span>Back</span>
        </button>
      </div>
      <div className="detail__card">
        <img src={country.flag} alt={country.name} width="560" height="408" />
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
                <strong>Currencies:</strong> {country.currencies?.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <strong>Languages:</strong> {country.languages?.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="detail__card__content__border">
            <strong>Border Countries:</strong>
            <div className="detail__card__content__border__container">
              {country.borders?.map((border) => (
                <button className="chip" key={border}>
                  {border}
                </button>
              ))}
              {!country.borders?.length && <span>None</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
