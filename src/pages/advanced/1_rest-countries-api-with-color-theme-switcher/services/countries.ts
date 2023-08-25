import type { Country } from "../types/countries";

const baseUrl = "https://restcountries.com/v3.1";
const fields = [
  "name",
  "population",
  "region",
  "capital",
  "nativeName",
  "subregion",
  "borders",
  "topLevelDomain",
  "currencies",
  "flag",
  "languages",
].join(",");

export const getAllCountries = async () => {
  const response = await fetch(`${baseUrl}/all?fields=${fields}`);
  const data = await response.json();
  return data as Country[];
};
