import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";

const SearchBar = () => {
  let [search, setSearch] = useState("");
  let [isInputVisible, setIsInputVisible] = useState(false);
  const navigate = useNavigate();
  let searchInputRef = useRef(null);
  const handleClick = () => {
    if (!isInputVisible) {
      searchInputRef.current.classList.remove("d-none");
      setIsInputVisible(true);
      searchInputRef.current.focus();
      return;
    }
    if (searchInputRef.current.value.trim() === "") return;
    navigate(`/search/${searchInputRef.current.value}`);
    searchInputRef.current.classList.add("d-none");
    setIsInputVisible(false);
    searchInputRef.current.value = "";
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ marginRight: { md: "3rem" } }}
    >
      <input
        ref={searchInputRef}
        className="search-bar d-none"
        type="text"
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleClick}>
        <Search />
      </button>
    </Stack>
  );
};

export default SearchBar;
