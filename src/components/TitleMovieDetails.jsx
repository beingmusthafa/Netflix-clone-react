import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const TitleMovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <div
      style={{
        width: { sm: "60%", md: "50%" },
        zIndex: 2,
        position: "absolute",
        bottom: 30,
        left: 30,
        maxWidth: { xs: "60%", md: "50%" },
      }}
    >
      <div className="main-movie-title">{movie.original_title}</div>
      <Stack direction="row" gap="2rem">
        <button className="title-movie-button">
          <PlayArrow />
          Play
        </button>
        <button className="title-movie-button"> &#43; My list</button>
      </Stack>
      <div className="main-movie-body">{movie.overview}</div>
    </div>
  );
};

export default TitleMovieDetails;
