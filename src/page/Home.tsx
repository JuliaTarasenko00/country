import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { toast } from "react-toastify";
import { getLimitCountries } from "../Api";
import { InformationCountry } from "../components/InformationCountry/InformationCountry";
import { Country } from "../helpers/type";

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  console.log("countries: ", countries);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const resultCountries = await getLimitCountries();
        setCountries(resultCountries);
      } catch (error) {
        return toast.error(`Opppss something went wrong.`);
      }
    };
    fetchCountries();
  }, []);


  return (
    <Container maxWidth="xl">
      <InformationCountry countries={countries} />
    </Container>
  );
};

export default HomePage;
