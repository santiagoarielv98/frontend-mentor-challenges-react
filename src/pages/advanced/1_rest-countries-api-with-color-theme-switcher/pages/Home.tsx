import React from "react";
import { useLoaderData } from "react-router-dom";
import type { Country } from "../types/countries";
import MainCard from "../components/card/MainCard";
import SearchInput from "../components/inputs/SearchInput";
import Select from "../components/inputs/Select";
import "./Home.css";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const data = useLoaderData() as Country[];

  return (
    <div className="container">
      <form className="form">
        <SearchInput />
        <Select />
      </form>
      <div className="cards">
        {data.map((country) => (
          <MainCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
