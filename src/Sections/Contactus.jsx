import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Btn from "../Components/Btn";

export default function Contactus({ title, subTitle, btnLabel }) {
  return (
    <Container sx={{padding:"3rem 0"}}>
      <Box
        sx={{
          fontFamily: "Source Sans 3",
          margin: "1rem 0",
          padding: "1rem 0",
          fontWeight: "700",
          fontSize: "1.5rem",
          lineHeight: "32px",
        }}
      >
        Contact us
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={10}
          md={9}
          sx={{
            fontFamily: " Source Sans 3",
            fontSize: "1.8rem",
            fontWeight: "600",
            lineHeight: "60px",
            textAlign: "left",
          }}
        >
          <Box>{title || "We’d love to hear from you"}</Box>
          <Box sx={{ fontWeight: "400", fontSize: "1rem" }}>
            {subTitle ||
              "Our friendly team is always here to know more about your project."}
          </Box>
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Btn xs={3} md={7} label={btnLabel || "Send Request"} />
        </Grid>
      </Grid>
    </Container>
  );
}
