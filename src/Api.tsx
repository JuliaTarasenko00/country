import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const { data } = await axios.get(`${BASE_URL}/all?fields=name,flags`);
  return data;
};

export const getLimitCountries = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/all?fields=name,languages,flags`
  );
  const limit = data.slice(0, 20);
  return limit;
};

export const getNameCountries = async (name: string) => {
  const { data } = await axios.get(`${BASE_URL}/name/${name}`);
  return data;
};
