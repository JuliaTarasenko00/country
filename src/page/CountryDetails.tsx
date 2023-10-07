import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { getNameCountries } from "../Api";
import { DetailsCountry } from "../components/DetailsCountry.tsx/DetailsContry";
import Loader from "../components/Loader";

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

const CountryDetails = () => {
  const { countryName } = useParams<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<TCountryDetails[]>([]);

  useEffect(() => {
    try {
      const fetchNameCountry = async () => {
        if (typeof countryName === "string") {
          setIsLoading(true);
          const resultNameCountry = await getNameCountries(countryName);
          setCountry(resultNameCountry);
        }
      };
      fetchNameCountry();
      setIsLoading(false);
    } catch (error) {
      console.log("error: ", error);
    } finally {
    }
  }, [countryName]);

  return (
    <>
      {isLoading && <Loader />}
      <Container maxWidth="xl">
        {country.map((information: TCountryDetails, index) => (
          <DetailsCountry key={index} prop={information} />
        ))}
      </Container>
    </>
  );
};

export default CountryDetails;
