import React from "react";
import { Box, Container, Grid } from "@mui/material";
import image1 from "../assets/Nurse.png";
import image2 from "../assets/CreepyGirl-Capsule.png";
import image3 from "../assets/Liutenant_Capsule.png";
import image4 from "../assets/Cyborg_Capsule.png";
import image5 from "../assets/Killers_Capsule.png";
import image6 from "../assets/library_capsule.png";
import image7 from "../assets/SittingOfficer.png";
import image8 from "../assets/Member.png";
import Blender from "../assets/SoftwareIcons/Blender.png";
import git from "../assets/SoftwareIcons/Git.png";
import Krita from "../assets/SoftwareIcons/Krita.svg";
import Perforce from "../assets/SoftwareIcons/Perforce.png";
import ue from "../assets/SoftwareIcons/Ue.png";
import Zbrush from "../assets/SoftwareIcons/Zbrush.png";

export default function Slider({ Type }) {
  const ProImages = [image1, image2, image3, image4, image5, image6, image7];
  const MemberImages = [image8, image8, image8, image8, image8, image8, image8];
  return (
    <Container>
      <Box
        sx={{
          fontFamily: "Source Sans 3",
          padding: "1rem 0",
          fontWeight: "700",
          fontSize: "1.5rem",
          lineHeight: "32px",
        }}
      >
        {Type}
      </Box>
      <Grid
        xs={12}
        container
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          scrollSnapType: "x mondatory",
          scrollPadding: "1rem",
          scrollbarWidth: "none",
        }}
      >
        {Type == "Projects" ? (
          <>
            {ProImages.map((img, index) => {
              return <ProCard proImg={img} key={index} />;
            })}
            <ProCard last />
          </>
        ) : (
          MemberImages.map((img, index) => {
            return <MemberCard proImg={img} key={index} />;
          })
        )}
      </Grid>
    </Container>
  );
}

function ProCard({ proImg, last }) {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        minWidth: "400px",
        height: "550px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        margin: ".5rem .5rem .5rem 0",
      }}
    >
      {!last ? (
        <img src={proImg} width={"100%"} height={"100%"} />
      ) : (
        <>
          <Grid
            sx={{
              fontFamily: "Source Sans 3",
              fontSize: "36px",
              fontWeight: "400",
              lineHeight: "44px",
              marginBottom: "1rem",
            }}
          >
            want to see more ?
          </Grid>
          <Grid
            sx={{
              width: "70px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
              borderRadius: "50%",
              fontSize: "10px",
            }}
          ></Grid>
        </>
      )}
    </Grid>
  );
}
function MemberCard({ proImg, last }) {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        minWidth: "400px",
        height: "500px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        margin: ".5rem .5rem .5rem 0",
        position: "relative",
        "&:hover": {
          "& > div": {
            // top: 0,
            animation: "mymove",
            animationDuration: "1s",
            animationFillMode: "both",
          },
        },
      }}
    >
      <img src={proImg} width={"100%"} height={"100%"} />
      <Grid
        sx={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          bottom: "-150%",
          left: "0",
          zIndex: "5555",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          gap: "10px",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <Grid>Yousef</Grid>
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
