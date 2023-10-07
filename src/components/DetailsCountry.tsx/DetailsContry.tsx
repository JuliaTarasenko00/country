import { FC } from "react";
import { Typography, Paper, styled } from "@mui/material";
import { TCountryDetails } from "../../page/CountryDetails";
import css from "./DetainsCountry.module.css";
import { loadingImg } from "../loadingImg";

const Item = styled(Paper)(() => ({
  textAlign: "center",
  backgroundColor: "rgb(26, 32, 39)",
  padding: 20,
}));

export const DetailsCountry: FC<{ prop: TCountryDetails }> = ({ prop }) => {
  const { capital, continents, coatOfArms, flags, name, timezones, idd } = prop;

  return (
    <section className={css.details_country}>
      <Typography variant="h2" className={css.name_country}>
        {name.official}
      </Typography>
      <Item elevation={8} className={css.wrapper}>
        <img
          loading="lazy"
          width={300}
          src={loadingImg({ imgPng: flags.png, imgSvg: flags.svg })}
          alt={flags.alt}
        />

        <img
          loading="lazy"
          width={200}
          src={loadingImg({
            imgPng: coatOfArms.png,
            imgSvg: coatOfArms.svg,
          })}
          alt={name.official}
        />
      </Item>
      <Typography variant="h4" className={css.title}>
        <span className={css.titleSpan}>Capital:</span>{" "}
        {`${capital.join(", ")}`}
      </Typography>
      <Typography variant="h4" className={css.title}>
        <span className={css.titleSpan}>Continents:</span>{" "}
        {`${continents.join(", ")}`}
      </Typography>
      <Typography variant="h4" className={css.title}>
        <span className={css.titleSpan}>Time Zones:</span>
        {`${timezones.join(", ")}`}
      </Typography>
      <Typography variant="h4" className={css.title}>
        <span className={css.titleSpan}>Phone Number</span>{" "}
        {`${idd.root} ${idd.suffixes.join("/ ")}`}
      </Typography>
    </section>
  );
};
