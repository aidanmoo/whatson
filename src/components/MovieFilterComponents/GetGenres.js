import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function GetGenres(params) {
  const path = "/3/genre/movie/list?language=en-AU&";
  const { data: genreList, isPending, error } = useFetch(path);
  
  // handle button toggle
  const handleButtonClick = (e, newGenre) => {
    params.setSelectedGenres(newGenre);
    //   if (selectedGenres.includes(e.target.id)) {
    //     console.log("In the Array")
    //   }
    //   // add unfound id to array
    // setSelectedGenres(oldArray => [...oldArray,e.target.id]);
     
  }

  return (
    <ToggleButtonGroup
      orientation="vertical"
      color="secondary"
      size="small"
      fullWidth="true"
      variant="contained"
      aria-label="outlined primary button group"
      value={params.selectedGenres}
      onChange={handleButtonClick}

    >
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {genreList &&
        genreList.genres.map((genre) => (
                      <ToggleButton
            key={genre.id}
            value={genre.id}
            className="genre"
                     
          >
            {genre.name}
          </ToggleButton>
        ))}       
    </ToggleButtonGroup>
    
  );
}
