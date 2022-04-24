import React from "react";
import "./App.css";
import { useState } from "react";
import PopularMovieFilters from "./components/PopularMovieFilters";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import MovieSearchForm from "./components/MovieSearchForm";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import { useContext } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import UserProfile from "./pages/userProfile/UserProfile";

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
import Searchbar from "./components/Searchbar";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeDetails } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  let [searchedFor, setSearchedFor] = useState("");
  let [selectedGenres, setSelectedGenres] = useState([]);
  let [selectedCertification, setSelectedCertification] = useState("");
  const { mode } = useTheme();
  // const myTheme = createTheme({
  //   palette: {
  //     mode: { mode },
  //   },
  // });

  const lightTest = {
    palette: {
      mode: "light",
    },
  };

  const darkTest = {
    palette: {
      mode: "dark",
    },
  };

  const appliedTheme = createTheme(mode === "dark" ? lightTest : darkTest);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },

  // }
  // );

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // }
  // );

  return (
    <ThemeDetails>
      {authIsReady && (
        <ThemeProvider theme={appliedTheme}>
          <div className="App">
            <Box sx={{ display: "flex" }}>
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

                <Container maxWidth="md">
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "background.default",
                      color: "text.primary",
                      borderRadius: 1,
                      p: 3,
                    }}
                  >
                    <Switch>
                      <Route exact path="/">
                        {!user && <Redirect to="/login" />}
                        {user && (
                          <Home
                            setSearchedFor={setSearchedFor}
                            searchedFor={searchedFor}
                            setSelectedCertification={setSelectedCertification}
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                            selectedCertification={selectedCertification}
                          />
                        )}
                      </Route>

                      <Route path="/movie/:id">
                        {!user && <Redirect to="/login" />}
                        {user && <Movie />}
                      </Route>
                      <Route path="/profile">
                        {!user && <Redirect to="/login" />}
                        {user && <UserProfile />}
                      </Route>
                      <Route path="/login">
                        {user && <Redirect to="/" />}
                        {!user && <Login />}
                      </Route>
                      <Route path="/signup">
                        {user && <Redirect to="/" />}
                        {!user && <Signup />}
                      </Route>
                      <Route path="/search">
                        {!user && <Redirect to="/login" />}
                        {user && <MovieSearchResults />}
                      </Route>
                      <Route path="*">
                        <Redirect to="/login" />
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
                      <a href="https://www.themoviedb.org/" target="_blank">
                        TMDB
                      </a>
                    </h5>
                  </Container>
                </AppBar>
              </BrowserRouter>
            </Box>
          </div>
        </ThemeProvider>
      )}
    </ThemeDetails>
  );
}

export default App;
