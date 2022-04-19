import React from "react";
import MovieSearchResults from "./MovieSearchResults";
import PopularMovies from "../components/PopularMovies";
import PopularMovieFilters from "../components/PopularMovieFilters";
import { useState } from "react";
import { Container, Box, Toolbar } from "@mui/material";

export default function Home(params) {
  let searchedFor = params.searchedFor;
  let selectedGenres = params.selectedGenres
  let selectedCertification = params.selectedCertification
  // let [selectedGenres, setSelectedGenres] = useState([]);
  // let [selectedCertification, setSelectedCertification] = useState("");

  return (
  
    <Container maxWidth='lg' >
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
