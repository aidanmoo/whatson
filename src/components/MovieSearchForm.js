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
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button, Paper } from "@mui/material";

export default function MovieSearchForm(params) {
  let [search, setSearch] = useState("");
  const history = useHistory();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  function handleSearchFieldOnChange(e) {
    e.preventDefault();
    console.log(e);
    // params.setSearchedFor(e.target.value)
    if (e.target.value) {
      history.push(`/search?q=${e.target.value}`);
    } else history.push(`/`);
  }

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={3}
      alignItems="center"
    >
      <Item>
        <Link to={`/`}>
          {" "}
          <img src="/images/logo.png" />
        </Link>
      </Item>
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

      <Item>
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
      </Item>
      {!user && (
        <Item>
          <Button href="/login">LOGIN</Button>
        </Item>
      )}
      {!user && (
        <Item>
          <Button href="/signup">SIGNUP</Button>
        </Item>
      )}
      {user && (
        <Item>
          <h3>Hello, {user.displayName}</h3>
        </Item>
      )}
      {user && (
        <Item>
          <Button href="/">BROWSE</Button>
        </Item>
      )}
      {user && (
        <Item>
          <Button href="/profile">MY LIST</Button>
        </Item>
      )}
      {user && (
        <Item>
          <Button color='secondary' variant='outlined' onClick={logout}>LOGOUT</Button>{" "}
        </Item>
      )}
    </Stack>
  );
}
