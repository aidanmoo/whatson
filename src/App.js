import React from "react";
import "./App.css";
import { useState } from "react";
import PopularMovieFilters from "./components/PopularMovieFilters";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import MovieSearchForm from "./components/MovieSearchForm";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

// imports for layout test
import {
  Box,
  AppBar,
  Drawer,
  Card,
  CssBaseline,
  Container,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Divider,
  Typography,
  CardActions,
} from "@mui/material";
import ClearSearchBox from "./components/MovieFilterComponents/ClearSearchBox";
import MovieSearchResults from "./pages/MovieSearchResults";

const drawerWidth = 240;

function App() {
  let [searchedFor, setSearchedFor] = useState("");
  let [selectedGenres, setSelectedGenres] = useState([]);
  let [selectedCertification, setSelectedCertification] = useState("");

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <MovieSearchForm
              setSearchedFor={setSearchedFor}
              searchedFor={searchedFor}
            />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            {!searchedFor && (
              <PopularMovieFilters
                setSelectedCertification={setSelectedCertification}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                selectedCertification={selectedCertification}
              />
            )}
            {searchedFor && <ClearSearchBox setSearchedFor={setSearchedFor} />}
            <Divider />
          </Box>
          <Toolbar />
        </Drawer>
        <Container maxWidth="md" >
        <Box> 

        <Switch>
          <Route exact path="/">
            <Home
              setSearchedFor={setSearchedFor}
              searchedFor={searchedFor}
              setSelectedCertification={setSelectedCertification}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              selectedCertification={selectedCertification}
            />
          </Route>

          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/search">
            <MovieSearchResults />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        </Box>
        </Container>
        <AppBar
          position="fixed"
          color="secondary"
          sx={{
            top: "auto",
            bottom: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Container maxWidth="sm">
            <h5>
              Movie Data provided by{" "}
              <a href="https://www.themoviedb.org/">TMDB</a>
            </h5>
          </Container>
        </AppBar>
      </BrowserRouter>
    </Box>
  );
}

export default App;
