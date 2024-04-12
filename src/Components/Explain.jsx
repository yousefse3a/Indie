import React from "react";
import { Container, Grid, Box } from "@mui/material";
export default function Explain({ reverse, title, subTitle, info, imgSrc }) {
  return (
    <Grid sx={{ textAlign: "center", padding: "2rem 0" }}>
      <Box
        sx={{
          fontFamily: "Source Sans 3",
          fontSize: "2.5rem",
          fontWeight: "600",
          lineHeight: "55px",
          marginBottom: "2rem",
        }}
      >
        {title}
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={6} sx={{ textAlign: "left" }}>
          <Box
            sx={{
              fontFamily: "Source Sans 3",
              fontSize: "2.25rem",
              fontWeight: "400",
              lineHeight: "55.2px",
            }}
          >
            {subTitle}
          </Box>
          <Box
            sx={{
              fontFamily: "Source Sans 3",
              fontSize: "1.5rem",
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            {info}
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
          <img src={imgSrc} width={"100%"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
