import React from "react";
import { Container, Grid } from "@mui/material";
import Btn from "../Components/Btn";
import ReactPlayer from "react-player";
import videoFile from "../assets/video.webm";

export default function Hero() {
  return (
    <Grid
      sx={{
        background: "black",
        position: "relative",
        height: "105vh",
        overflow: "hidden",
      }}
    >
      <video width="100%" height={"100%"} autoPlay loop muted>
        <source src={videoFile} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate( -50% , -40% )",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Source Sans 3",
            padding: "2rem 0",
            "& > div:not(:last-child)": {
              marginBottom: "2rem",
            },
          }}
        >
          <Grid
            item
            xs={11}
            md={10}
            sx={{
              fontSize: { xs: "70px", md: "128px" },
              fontWeight: "700",
              lineHeight: "115.2px",
              letterSpacing: "-0.04em",
            }}
          >
            Indie 3D <br />
            Character Artist
          </Grid>
          <Grid
            item
            xs={11}
            md={9}
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "35.2px",
            }}
          >
            Step into the digital realm with us and watch as your bold visions
            take flight, transforming into market triumphs. Experience the power
            of our 3D website as we unleash innovation and creativity together.
          </Grid>
          <Btn xs={10} md={4} p={"1rem 3rem"} label={"Request Service"} />
        </Grid>
      </Container>
    </Grid>
  );
}
