import React from "react";
import { useLoaderData } from "react-router-dom";
import type { Country } from "../types/countries";
import MainCard from "../components/card/MainCard";
import SearchInput from "../components/inputs/SearchInput";
import Select from "../components/inputs/Select";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const data = useLoaderData() as Country[];

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        marginTop: "5rem",
        padding: "3rem 0",
      }}
    >
      <form style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchInput />
        <Select />
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4.625rem",
          padding: "3rem 0",
        }}
      >
        {data.map((country) => (
          <MainCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
