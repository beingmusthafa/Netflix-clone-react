import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import { fetchByGenre } from "../fetch";
import MovieRow from "./MovieRow";

const Genre = ({ title, genreId }) => {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchByGenre(genreId)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, [genreId]);
  if (movies.length === 0) return null;
  return (
    <>
      <Typography variant="h5" color="white" fontWeight={500} m={2}>
        {title}
      </Typography>
      <MovieRow movies={movies} />
    </>
  );
};

export default Genre;
