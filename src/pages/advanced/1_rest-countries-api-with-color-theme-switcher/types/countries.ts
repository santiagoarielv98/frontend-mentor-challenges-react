export enum Region {
  Africa = "Africa",
  Europe = "Europe",
  Oceania = "Oceania",
  Americas = "Americas",
  Asia = "Asia",
  Antarctic = "Antarctic",
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Country {
  name: string;
  population: number;
  region: Region;
  capital: string;
  nativeName: string;
  subregion: string;
  borders: string[];
  topLevelDomain: string[];
  currencies: Currency[];
  flag: string;
  languages: Language[];
}
