import React from "react";
import { useLoaderData } from "react-router-dom";
import type { Country } from "../types/countries";
import MainCard from "../components/card/MainCard";
import SearchInput from "../components/inputs/SearchInput";
import Select from "../components/inputs/Select";
import "./Home.css";
import useObserver from "../hooks/useObserver";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [search, setSearch] = React.useState<string>("");
  const [region, setRegion] = React.useState<string>("");

  const data = useLoaderData() as Country[];

  const [observer, setElements, entries] = useObserver();

  const handleCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const filteredData = data.filter((country) => {
    if (region === "") {
      return country.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return country.name.toLowerCase().includes(search.toLowerCase()) && country.region === region;
    }
  });

  React.useEffect(() => {
    const cards = document.querySelectorAll(".card");
    setElements(cards);
  }, [setElements]);

  React.useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, [entries, observer]);

  return (
    <div className="home__container">
      <form className="form">
        <SearchInput value={search} onChange={handleCountrySearch} />
        <Select value={region} onChange={handleRegionChange} />
      </form>
      <div className="cards">
        {filteredData.map((country) => (
          <MainCard key={country.name} country={country} />
        ))}
        {filteredData.length === 0 && <div className="no-results">No results found</div>}
      </div>
    </div>
  );
};

export default Home;
