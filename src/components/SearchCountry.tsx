import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Autocomplete, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { getAllCountries } from "../Api";
import { loadingImg } from "./loadingImg";
import { CountrySearch } from "../helpers/type";

export const SearchCountry = () => {
  const [countries, setCountries] = useState<CountrySearch[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const resultCountries = await getAllCountries();
        setCountries(resultCountries);
      } catch (error) {
        return toast.error(`Opppss something went wrong.`);
      }
    };
    fetchCountries();
  }, []);

  return (
    <section style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Autocomplete
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        onChange={(ev: any, newValue: CountrySearch | null) => {
          if (newValue) {
            navigate(newValue.name.official);
          }
        }}
        getOptionLabel={(option) => option.name.official}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={loadingImg({
                imgPng: option.flags.png,
                imgSvg: option.flags.svg,
              })}
              alt={option.name.official}
            />
            {option.name.official}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-textarea"
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            name="country"
            multiline
            className="custom-textfield"
            InputLabelProps={{
              style: { color: "white", border: "white" },
            }}
            sx={{
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
        )}
      />
    </section>
  );
};
