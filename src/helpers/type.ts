export type CountrySearch = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    official: string;
  };
};

export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  capital: string[];
  languages: any;
  currencies: any;
  name: {
    official: string;
  };
};

export type TCountryDetails = {
  capital: string[];
  continents: string[];
  coatOfArms: {
    png: string;
    svg: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    official: string;
  };
  timezones: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
};
