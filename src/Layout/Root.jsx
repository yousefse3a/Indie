import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Navber from "./Navbar";

export default function Root({ show, messTosa }) {
  return (
    <>
      <Navber />
      <Grid
        sx={{
          minWidth: "100vw",
          minHeight: "300px",
          position: "relative",
        }}
      >
        <Outlet />
        {show && <Toas mess={messTosa} />}
      </Grid>
      <Footer />
    </>
  );
}
function Toas({ mess }) {
  return (
    <Grid
      sx={{
        display: "flex",
        width: "200px",
        height: "60px",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        color: "black",
        borderRadius: "5px",
        position: "fixed",
        bottom: "2%",
        right: "2%",
      }}
    >
      {mess}
    </Grid>
  );
}
