import { Stack, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <Stack className="movie-details" direction="column" alignItems="start">
      <Stack direction="row">
        <div className="movie-details-title">{movie.original_title}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center ",
            fontSize: "2rem",
            fontWeight: "bold",
            marginLeft: "4rem",
          }}
        >
          {movie.vote_average}
          <Star sx={{ color: "#ffbe33", marginLeft: "0.5rem" }} />
        </div>
      </Stack>
      <Typography variant="subtitle1">{movie.overview}</Typography>
    </Stack>
  );
};

export default MovieDetails;
