import React from "react";
import MovieSearchResults from "./MovieSearchResults";
import PopularMovies from "../components/PopularMovies";
import PopularMovieFilters from "../components/PopularMovieFilters";
import { useState } from "react";
import { Container, Box, Toolbar, Drawer, Divider } from "@mui/material";
import ClearSearchBox from "../components/MovieFilterComponents/ClearSearchBox";


export default function Home(params) {
  let searchedFor = params.searchedFor;
  let selectedGenres = params.selectedGenres
  let selectedCertification = params.selectedCertification
  let setSelectedCertification = params.setSelectedCertification
  let setSelectedGenres = params.setSelectedGenres
  let setSearchedFor = params.setSearchedFor

  // let [selectedGenres, setSelectedGenres] = useState([]);
  // let [selectedCertification, setSelectedCertification] = useState("");
  const drawerWidth = 240;
  return (
  
    <Container maxWidth='lg' >
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
                    {searchedFor && (
                      <ClearSearchBox setSearchedFor={setSearchedFor} />
                    )}
                    <Divider />
                  </Box>
                  <Toolbar />
                </Drawer>
    <Box >
        <Toolbar />
        <Toolbar />
      {!searchedFor && <PopularMovies selectedGenres={selectedGenres} selectedCertification={selectedCertification}/>}

      {searchedFor && <MovieSearchResults searchedFor={searchedFor} />}
      <Toolbar />
      </Box>
      </Container>
  );
}
