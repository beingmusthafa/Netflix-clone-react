import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovie } from "../fetch";
import { MovieRow, Poster } from "../components";
import { Stack, Typography } from "@mui/material";

const SearchResults = () => {
  let [movies, setMovies] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  const { searchTerm } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    searchMovie(searchTerm)
      .then((data) => {
        setTimeout(() => {
          setMovies(data);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [searchTerm]);
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
      {movies.length > 0 && (
        <>
          <div
            style={{
              fontWeight: 500,
              fontSize: "2rem",
              color: "white",
              marginLeft: "2rem",
            }}
          >
            <span style={{ color: "red" }}>{movies.length}</span> results found
          </div>
          <Stack
            direction={{ sm: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            {movies.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))}
          </Stack>
        </>
      )}

      {!isLoading && movies.length === 0 && (
        <div
          style={{
            fontWeight: 500,
            fontSize: "2rem",
            color: "white",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "5rem",
            width: "50%",
          }}
        >
          No results found
        </div>
      )}

      {isLoading && (
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "5rem",
            width: "50%",
          }}
        >
          <img
            height="60rem"
            style={{ position: "absolute", top: "30vh" }}
            src="https://www.crmcrate.com/wp-content/uploads/2022/09/Spinner-0.6s-363px.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
