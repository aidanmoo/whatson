import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MovieSearchResults from "../pages/MovieSearchResults";
import PopularMovies from "../components/PopularMovies";
import PopularMovieFilters from "../components/PopularMovieFilters";

export default function LayoutTest(params) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {!params.searchedFor && (
            <PopularMovieFilters
              setSelectedGenres={setSelectedGenres}
              setSelectedCertification={setSelectedCertification}
            />
          )}
          {params.searchedFor && <p>Clear Keyword Search To Enable Filter</p>}
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {!params.searchedFor && (
          <PopularMovies
            selectedGenres={params.selectedGenres}
            selectedCertification={params.selectedCertification}
          />
        )}

        {params.searchedFor && (
          <MovieSearchResults searchedFor={params.searchedFor} />
        )}
      </Box>
    </Box>
  );
}
