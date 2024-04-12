import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Contactus from "../Sections/Contactus";
import Member from "../assets/Member.png";
import Blender from "../assets/SoftwareIcons/Blender.png";
import git from "../assets/SoftwareIcons/Git.png";
import Krita from "../assets/SoftwareIcons/Krita.svg";
import Perforce from "../assets/SoftwareIcons/Perforce.png";
import ue from "../assets/SoftwareIcons/Ue.png";
import Zbrush from "../assets/SoftwareIcons/Zbrush.png";
export default function Ourteam() {
  const teamPlayers = [
    {
      name: "Ahmed Ibrahim",
      about:
        "also known as Vitamine-C, I'm an Artist with 7 years of experience creating 3d characters for games, I have studied Fine Arts in 5 years program at faculty of art education in Egypt, I have been practicing and studying art in a lot of different majors like painting, drawing, sculpture, Design, handmade jewelry, and art history.I Work on Unreal Engine Since 4.9 version, I always looking for working with indie teams.",
      skills: [],
      imgSrc: Member,
    },
    {
      name: "Ahmed Ibrahim",
      about:
        "also known as Vitamine-C, I'm an Artist with 7 years of experience creating 3d characters for games, I have studied Fine Arts in 5 years program at faculty of art education in Egypt, I have been practicing and studying art in a lot of different majors like painting, drawing, sculpture, Design, handmade jewelry, and art history.I Work on Unreal Engine Since 4.9 version, I always looking for working with indie teams.",
      skills: [],
      imgSrc: Member,
    },
    {
      name: "Ahmed Ibrahim",
      about:
        "also known as Vitamine-C, I'm an Artist with 7 years of experience creating 3d characters for games, I have studied Fine Arts in 5 years program at faculty of art education in Egypt, I have been practicing and studying art in a lot of different majors like painting, drawing, sculpture, Design, handmade jewelry, and art history.I Work on Unreal Engine Since 4.9 version, I always looking for working with indie teams.",
      skills: [],
      imgSrc: Member,
    },
  ];
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
          About us
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
          {teamPlayers.map((player, index) => {
            return (
              <PlayerCard
                key={index}
                imgSrc={player.imgSrc}
                name={player.name}
                about={player.about}
                skills={player.skills}
              />
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

function PlayerCard({ imgSrc, name, about, skills }) {
  return (
    <Grid
      item
      xs={12}
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Grid xs={4}>
        <img src={Member} width={"100%"} />
      </Grid>
      <Grid
        xs={7.5}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > div:not(:last-child)": { marginBottom: "1rem" },
        }}
      >
        <Box
          sx={{
            fontFamily: "Source Sans 3",
            fontSize: "2rem",
            fontWeight: "600",
            lineHeight: "66px",
          }}
        >
          {name}
        </Box>
        <Box
          sx={{
            fontFamily: "Source Sans 3",
            fontSize: "1.5rem",
            fontWeight: "400",
            lineHeight: "39.6px",
          }}
        >
          {about}
        </Box>
        <Grid
          sx={{
            display: "flex",
            "& > div": {
              width: "25px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: ".5rem",
            },
          }}
        >
          <Box>
            <img src={Blender} width={"100%"} />
          </Box>
          <Box>
            <img src={git} width={"100%"} />
          </Box>
          <Box>
            <img src={Zbrush} width={"100%"} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
