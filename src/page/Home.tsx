import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getLimitCountries } from "../Api";
import { InformationCountry } from "../components/InformationCountry/InformationCountry";

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

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    try {
      const fetchCountries = async () => {
        const resultCountries = await getLimitCountries();
        setCountries(resultCountries);
      };
      fetchCountries();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <InformationCountry countries={countries} />
    </Container>
  );
};

export default HomePage;
