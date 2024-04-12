import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LOGO from "../assets/logo.png";
import Btn from "../Components/Btn";

export default function Navber() {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [openMobileNav, setopenMobileNav] = useState(false);
  const [currentPage, setcurrentPage] = useState(
    location.pathname.split("/")[1]
  );

  const handleNavToggle = () => {
    setopenMobileNav((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    setcurrentPage(location.pathname.split("/")[1]);
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setBackgroundColor("#121212"); // Change background color
      } else {
        setBackgroundColor("transparent"); // Revert to initial background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      sx={{
        background: backgroundColor,
        position: currentPage == "" ? "fixed" : "",
        zIndex: "5555",
        width: "100vw",
      }}
    >
      <Container sx={{ padding: { xs: "0 !important" } }}>
        {/* for PC purpose */}
        <Grid
          container
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            padding: "1rem 0",
            boxSizing: "border-box",
            justifyContent: "space-between",
            color: "white",
            background: backgroundColor,
          }}
          disableGutters={true}
        >
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            <Link to={"/"} style={{ width: "100%" }}>
              <Box
                sx={{ width: "100px", display: "flex", alignItems: "center" }}
              >
                <img src={LOGO} style={{ width: "100%" }} />
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <NavTitle to="/" active={currentPage == ""}>
              Home
            </NavTitle>
            <NavTitle to="projects" active={currentPage == "projects"}>
              Projects
            </NavTitle>
            <NavTitle to="ourTeam" active={currentPage == "ourTeam"}>
              Our Team
            </NavTitle>
            <NavTitle to="contactUS" active={currentPage == "contactUS"}>
              Contact us
            </NavTitle>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "1rem",
              zIndex: "1000",
            }}
          >
            <Btn xs={10} md={10} label={"Request a Service"} />
          </Grid>
        </Grid>

        {/* for demo purpose */}
        <Grid
          container
          sx={{
            display: { xs: "flex", md: "none" },
            position: "relative",
            height: "97px",
          }}
        >
          <Grid
            item
            xs={12}
            container
            sx={{
              display: { xs: "flex", md: "none" },
              padding: "1.4rem 2rem",
              boxSizing: "border-box",
              justifyContent: "space-between",
              alignItems: "center",
              position: "fixed",
              zIndex: "55555",
              background: "black",
            }}
          >
            <Grid item xs={6}>
              <Link to={"/"}>
                <Box
                  sx={{ width: "100px", display: "flex", alignItems: "center" }}
                >
                  <img src={LOGO} style={{ width: "100%" }} />
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              xs={1}
              onClick={() => {
                handleNavToggle();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                width="100%"
                height="100%"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                />
              </svg>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: openMobileNav ? "flex" : "none", md: "none" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              position: "fixed",
              top: "97px",
              minHeight: "calc( 50vh - 97px)",
              zIndex: "5555",
              background: "black",
            }}
          >
            <MobileNav handleNavToggle={handleNavToggle} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
function NavTitle({ children, active, subTitles, to }) {
  return (
    <Grid
      item
      xs={1.5}
      sx={{
        position: "relative",
        borderBottom: "3px solid transparent",
        borderBottomColor: active ? "white" : "transparent",
        padding: ".5rem 0",
        "&:hover": {
          color: "white",
          zIndex: "1000",
          borderBottom: "3px solid transparent",
          borderBottomColor: active ? "white" : "none",
        },
      }}
    >
      <Link to={to}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Almarai",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "0em",
            padding: "5px 0",
            color: "white",
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {children}
        </Box>
      </Link>
    </Grid>
  );
}

function MobileNav({ handleNavToggle }) {
  return (
    <Grid
      container
      sx={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        lineHeight: "22px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "400",
        zIndex: "1000",
        background: "black",
        "& > div": {
          display: "flex",
          fontSize: "1rem",
          fontWeight: "700",
          padding: "1rem 0",
          "&:hover": {
            background: "white",
            "& > a": {
              color: "black",
            },
          },
        },
        "& > div > a": {
          color: "white",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Grid item xs={12}>
        <Link to={"/"} onClick={handleNavToggle}>
          Home
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/projects"} onClick={handleNavToggle}>
          Projects
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/ourTeam"} onClick={handleNavToggle}>
          Our Team
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/contactUS"} onClick={handleNavToggle}>
          Contact us
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/"} onClick={handleNavToggle}>
          Request a service{" "}
        </Link>
      </Grid>
    </Grid>
  );
}
