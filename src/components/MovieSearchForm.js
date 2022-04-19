import React from "react";
import { useState } from "react";
import MovieSearchResults from "../pages/MovieSearchResults";
import { useParams, useHistory, Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";




export default function MovieSearchForm(params) {
  let [search, setSearch] = useState("");
  let [path, setPath] = useState("");
  const history = useHistory();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    params.setSearchedFor(search);
  }

  function clearSubmit(e) {
    e.preventDefault();
    params.setSearchedFor(null);
  }

function handleSearchFieldOnChange(e) {
  e.preventDefault();
  params.setSearchedFor(e.target.value)
}

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
      alignItems="center"
    >
      <item>
       <Link to={`/`}> <img src="/images/logo.png" /></Link>
      </item>
      {/* <item>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search for a movie"
          />

          <input type="submit" value="Search" />
        </form>
      </item>
      <item>
        <div className="search-clear-button">
          {" "}
          <form onSubmit={clearSubmit}>
            <input type="submit" value="Clear" />
          </form>
        </div>
      </item> */}
      
      <item>
        <TextField
          placeholder="Search for Movies"
          type="search"
          variant="outlined"          
          size="small"
          onChange={handleSearchFieldOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </item>
    </Stack>
  );
}
