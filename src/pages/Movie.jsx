import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieDetails } from "../components";

const Movie = () => {
  const location = useLocation();
  let movie = location.state.movie;
  useEffect(() => {});
  return (
    <div
      className="page-padding"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        height: "100%",
        width: "100%",
      }}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <img
          className="movie-details-poster"
          src={
            "https://image.tmdb.org/t/p/w500" +
            (movie.poster_path ?? "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg")
          }
          alt=""
        />
        <MovieDetails movie={movie} />
      </Stack>
    </div>
  );
};

export default Movie;
