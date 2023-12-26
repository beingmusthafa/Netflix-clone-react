import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Movie from "./pages/Movie";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
