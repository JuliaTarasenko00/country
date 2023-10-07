import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { toast } from "react-toastify";
import { getNameCountries } from "../Api";
import { DetailsCountry } from "../components/DetailsCountry.tsx/DetailsContry";
import Loader from "../components/Loader";
import { TCountryDetails } from "../helpers/type";

const CountryDetails = () => {
  const { countryName } = useParams<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<TCountryDetails[]>([]);

  useEffect(() => {
    const fetchNameCountry = async () => {
      try {
        if (typeof countryName === "string") {
          setIsLoading(true);
          const resultNameCountry = await getNameCountries(countryName);
          setCountry(resultNameCountry);
        }
        setIsLoading(false);
      } catch (error) {
        return toast.error(`Opppss something went wrong.`);
      }
    };
    fetchNameCountry();
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
