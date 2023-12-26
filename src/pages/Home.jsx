import React, { useState, useEffect } from "react";
import { MovieRow, MainPoster, Genre } from "../components";
import { fetchGenres } from "../fetch";
const Home = () => {
  let [genres, setGenres] = useState([]);
  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <MainPoster />
      {genres.map((genre) => {
        return <Genre key={genre.id} title={genre.name} genreId={genre.id} />;
      })}
    </>
  );
};

export default Home;
