import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Autocomplete, TextField } from '@mui/material';
import { getAllCountries } from '../Api';
import { loadingImg } from './loadingImg';

type Country = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    official: string;
  };
};

const SearchCountry = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchCountries = async () => {
        const resultCountries = await getAllCountries();
        setCountries(resultCountries);
      };
      fetchCountries();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Autocomplete
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        onChange={(ev: any, newValue: Country | null) => {
          if (newValue) {
            navigate(newValue.name.official);
          }
        }}
        getOptionLabel={option => option.name.official}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
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
        renderInput={params => (
          <TextField
            {...params}
            id="outlined-textarea"
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
            name="country"
            multiline
            className="custom-textfield"
            InputLabelProps={{
              style: { color: 'white', border: 'white' },
            }}
            sx={{
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />
        )}
      />
    </section>
  );
};
export default SearchCountry;
