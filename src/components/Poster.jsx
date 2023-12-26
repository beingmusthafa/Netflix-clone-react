import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Poster = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie/" + movie.id, { state: { movie: movie } });
  };
  return (
    <div
      onClick={handleClick}
      className="movie-card"
      style={{ minWidth: "15rem" }}
    >
      <CardMedia
        className="movie-poster"
        component="img"
        image={
          "https://image.tmdb.org/t/p/w500" +
          (movie.backdrop_path ?? "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg")
        }
        alt={"https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"}
      />
      <CardContent>
        <Typography variant="h7" fontWeight={500} color="white">
          {movie.original_title}
        </Typography>
      </CardContent>
    </div>
  );
};

export default Poster;
