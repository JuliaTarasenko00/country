import { Grid, Box, Paper, Button, styled, Typography } from "@mui/material";
import SearchCountry from "../SearchCountry";
import { RouterLink } from "../Link";
import { loadingImg } from "../loadingImg";
import { Country } from "../../page/Home";
import { FC } from "react";
import country from "../../img/cuontry.png";

type TCountry = {
  countries: Country[];
};

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const InformationCountry: FC<TCountry> = (prop) => {
  const { countries } = prop;

  return (
    <Box sx={{ width: "100%" }}>
      <SearchCountry />
      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundImage: `url(${country})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&:hover": {
            transform: "scale(1.03)translateZ(10px)",
          },
        }}
      />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {countries?.map((country: Country) => (
          <Grid item xs={3} key={country.name.official}>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: "#1A2027",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    component={RouterLink}
                    href={`/${country.name.official}`}
                    sx={{ width: 128, height: 128 }}
                  >
                    <Img
                      loading="lazy"
                      alt={country.flags.alt}
                      src={loadingImg({
                        imgPng: country.flags.png,
                        imgSvg: country.flags.svg,
                      })}
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h2"
                        style={{
                          color: "#fff",
                          fontSize: 18,
                        }}
                      >
                        {country.name.official}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="p"
                        style={{
                          color: "#607D8B",
                          fontSize: 15,
                        }}
                      >
                        {`Language: ${Object.values(country.languages).join(
                          ", "
                        )}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
