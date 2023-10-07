import axios, { AxiosResponse } from "axios";
import { Country, CountrySearch, TCountryDetails } from "./helpers/type";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<CountrySearch[]> => {
  const { data }: AxiosResponse<CountrySearch[]> = await axios.get(
    `${BASE_URL}/all?fields=name,flags`
  );
  return data;
};

export const getLimitCountries = async (): Promise<Country[]> => {
  const { data }: AxiosResponse<Country[]> = await axios.get(
    `${BASE_URL}/all?fields=name,languages,flags`
  );
  const limit = data.slice(0, 20);
  return limit;
};

export const getNameCountries = async (
  name: string
): Promise<TCountryDetails[]> => {
  const { data }: AxiosResponse<TCountryDetails[]> = await axios.get(
    `${BASE_URL}/name/${name}`
  );
  return data;
};
