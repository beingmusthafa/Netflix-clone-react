import axios from "axios";

const base_url = "https://api.themoviedb.org/3";
const api_key = "db004253f11dadc5b44c83fa2f4278e8";

export const fetchGenres = async () => {
  const { data } = await axios.get(
    `${base_url}/genre/movie/list?api_key=${api_key}`
  );
  return data.genres.slice(0, 7);
};
// https://image.tmdb.org/t/p/w500/bckxSN9ueOgm0gJpVJmPQrecWul.jpg PATH FORMAT

export const fetchByGenre = async (genreId) => {
  const { data } = await axios.get(
    `${base_url}/discover/movie?api_key=${api_key}&with_genres=${genreId}`
  );
  return data.results.slice(0, 10);
};

export const fetchPopular = async () => {
  const { data } = await axios.get(
    `${base_url}/movie/popular?api_key=${api_key}`
  );
  return data.results[0];
};

export const searchMovie = async (query) => {
  const searchQuery = query.replace(/ /g, "+");
  const { data } = await axios.get(
    `${base_url}/search/movie?query=${searchQuery}&api_key=${api_key}`
  );
  return data.results;
};
export const searchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `${base_url}/movie/${movieId}?api_key=${api_key}`
  );
  return data.results;
};

// https://api.themoviedb.org/3/genre/movie/list?api_key=db004253f11dadc5b44c83fa2f4278e8
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=db004253f11dadc5b44c83fa2f4278e8
