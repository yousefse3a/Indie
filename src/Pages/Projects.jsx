import React from "react";
import { Box, Container, Grid } from "@mui/material";

import image0 from "../assets/CreepyGirl.png";
import image1 from "../assets/Nurse.png";
import image2 from "../assets/CreepyGirl-Capsule.png";
import image3 from "../assets/Liutenant_Capsule.png";
import image4 from "../assets/Cyborg_Capsule.png";
import image5 from "../assets/Killers_Capsule.png";
import image6 from "../assets/library_capsule.png";
import image7 from "../assets/SittingOfficer.png";

import game1 from "../assets/Games/Omitted-capsule.png";
import game2 from "../assets/Games/FiberTales-capsule.png";
import game3 from "../assets/Games/ForbiddenForgiveness-capsule.png";
import Contactus from "../Sections/Contactus";
export default function Projects() {
  const ProImages = [image0, image2, image3, image7, image5, image4];
  const GameImages = [game1, game2, game3];

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          marginBottom: "4rem",
        }}
      >
        <Grid
          xs={12}
          container
          sx={{
            display: "flex",
            textAlign: "left",
            fontFamily: "Source Sans 3",
            fontSize: "3rem",
            fontWeight: "700",
            lineHeight: "57.6px",
            padding: "2rem 0",
          }}
        >
          Our Projects
        </Grid>
        <Grid
          xs={12}
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            rowGap: "8px",
          }}
        >
          {ProImages.map((pro, index) => {
            return (
              <Grid item md={3.5} key={index} sx={{ height: "400px" }}>
                <img src={pro} style={{ height: "100%" }} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Grid
          xs={12}
          container
          sx={{
            display: "flex",
            textAlign: "left",
            fontFamily: "Source Sans 3",
            fontSize: "1.5rem",
            fontWeight: "700",
            lineHeight: "57.6px",
            padding: "2rem 0",
          }}
        >
          Published Games
        </Grid>
        <Grid
          xs={12}
          container
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            rowGap: "10px",
          }}
        >
          {GameImages.map((pro, index) => {
            return (
              <Grid item xs={10} md={3.5} key={index} sx={{ height: "400px" }}>
                <img src={pro} style={{ width: "100%", height: "100%" }} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Contactus
        title={"Let’s level up your design, together"}
        subTitle={"You can reach us anytime "}
        btnLabel={"Let’s work together"}
      />
    </>
  );
}
