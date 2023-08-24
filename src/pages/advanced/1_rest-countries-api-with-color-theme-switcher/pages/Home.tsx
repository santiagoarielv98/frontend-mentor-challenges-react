import React from "react";
import { useLoaderData } from "react-router-dom";
import type { Country } from "../types/countries";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const data = useLoaderData() as Country[];

  return (
    <div>
      {data.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
    </div>
  );
};

export default Home;
