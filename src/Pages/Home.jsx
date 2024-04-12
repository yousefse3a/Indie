import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Hero from "../Sections/Hero";
import Contactus from "../Sections/Contactus";
import Slider from "../Sections/Slider";
import Explain from "../Components/Explain";
import Whatwedo from "../Sections/Whatwedo";

export default function Home() {
  return (
    <Grid sx={{ "& > div:not(:last-child)": { marginBottom: "5rem" } }}>
      <Hero />
      <Slider Type={"Projects"} />
      <Whatwedo />
      <Slider Type={"Meet our team"} />
      <Contactus />
    </Grid>
  );
}
