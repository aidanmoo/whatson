import React from "react";
import GetCertification from "./MovieFilterComponents/GetCertification";
import GetGenres from "./MovieFilterComponents/GetGenres";
import { Divider } from "@mui/material";

export default function PopularMovieFilters(params) {
  return (
    <div>
      <Divider>Select Genre(s)</Divider>
      <GetGenres
        selectedGenres={params.selectedGenres}
        setSelectedGenres={params.setSelectedGenres}
      />
        <Divider>Select Rating</Divider>
      <GetCertification
        setSelectedCertification={params.setSelectedCertification}
        selectedCertification={params.selectedCertification}
      />
    </div>
  );
}
