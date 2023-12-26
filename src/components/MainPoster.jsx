import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import { width } from "@mui/system";
import React, { useState, useEffect } from "react";
import TitleMovieDetails from "./TitleMovieDetails";
import { fetchPopular } from "../fetch";

const MainPoster = () => {
  let [titleMovie, setTitleMovie] = useState([]);
  useEffect(() => {
    fetchPopular()
      .then((data) => setTitleMovie(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(titleMovie);
  return (
    <Box
      sx={{
        width: "100%",
        height: { sm: "30vh", md: "80vh" },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${titleMovie.backdrop_path}`}
        alt="poster"
        width="100%"
      />
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(to right, black, transparent)",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></div>
      <TitleMovieDetails movie={titleMovie} />
    </Box>
  );
};

export default MainPoster;
