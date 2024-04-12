import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Explain from "../Components/Explain";
import Sculpting from "../assets/gif/Sculpting.gif";
import Rigging from "../assets/gif/Rigging.gif";
import Material from "../assets/gif/Material.gif";
import Cloth from "../assets/gif/Cloth.gif";
export default function Whatwedo() {
  const list = [
    {
      img: Sculpting,
      title: "3D SCULPTING",
      subTitle: "Sculpting on Zbrush or Blender",
      info: "Sculpting a high detailed characters giving them shape, personality, and skin details.",
    },
    {
      img: Rigging,
      title: "RIGGING",
      subTitle: "Rigging the character for game engines.",
      info: "Make the character compatible with UnrealEngine by rig it with Epic Skeleton.Providing a blender file with the rig controls.",
    },
    {
      img: Material,
      title: "MATERIALS",
      subTitle: "Deliver the character's material on Unreal Engine.",
      info: "The character will be delivered with materials in Unreal Engine project.the material will be packed and optimized 2k or 4k in a three sets of maps (Color, Normal, Packed roughness and AO).",
    },
    {
      img: Cloth,
      title: "CLOTH SIMULATION",
      subTitle: "Design Cloth and rig them to the character.",
      info: "Simulate cloth in UnrealEngine to give a realistic movement.",
    },
  ];
  return (
    <Container>
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
        What we do
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {list.map((item, index) => {
          return (
            <Explain
              key={index}
              reverse={index % 2 != 0}
              title={item.title}
              subTitle={item.subTitle}
              info={item.info}
              imgSrc={item.img}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
