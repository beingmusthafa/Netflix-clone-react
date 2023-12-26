import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      width: "100%",
      height: "4rem",
      position: "fixed",
      top: 0,
      px: 2,
      background: {
        xs: "black",
        md: "linear-gradient(black,transparent)",
      },
      zIndex: 10,
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      gap="2rem"
      sx={{
        overflowX: "auto",
        height: "100%",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Link to="/">
        <img className="nav-logo" src={logo} alt="" />
      </Link>
      <div className="nav-text" color="white" variant="subtitle2">
        Movies
      </div>
      <div className="nav-text" color="white" variant="subtitle2">
        TV Shows
      </div>
    </Stack>
    <SearchBar />
  </Stack>
);

export default Navbar;
