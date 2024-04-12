import React from "react";
import { Box, Grid } from "@mui/material";

export default function Btn({ xs, md, label, p, component, type, disabled }) {
  return (
    <Grid
      component={component}
      type={type}
      item
      disabled={disabled}
      xs={xs || 12}
      md={md || 12}
      sx={{
        padding: p || "1rem .5rem",
        boxSizing: "border-box",
        background: "white",
        color: "black",
        border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          background: "black",
          color: "white",
        },
      }}
    >
      {label}
    </Grid>
  );
}
