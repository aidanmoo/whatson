import React, { useState } from "react";
import { useParams, useHistory,  } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import WhereToView from "../components/WhereToView";
import { Button, Toolbar, Stack, Box, Container } from "@mui/material";
import SimilarMovies from "../components/SimilarMovies";
import WatchPreview from "../components/WatchPreview";
import AddtoWatchList from "../components/AddtoWatchList";
import RemovefromWatchList from "../components/RemovefromWatchList"

export default function Movie() {
  const { id } = useParams();
  const path = "/3/movie/" + id + "?";
  const { data: movie, isPending, error } = useFetch(path);
  const history = useHistory();
   

  return (
    <Container maxWidth='lg' >
    <Box >
      <Toolbar />
      <Toolbar />
      
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {movie && (
        <Stack direction="row" spacing={5}>
          <item>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
          </item>
          <item>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <WatchPreview movie_id={id} />
          <p>See More Info about <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
             {movie.original_title} on IMDB
          </a></p>
          <p>
          <Button color='warning' variant="outlined" onClick={() => history.goBack()}>Go Back</Button>
          </p>
          </item>
          <item>
            <p> On Your List?</p>
          <AddtoWatchList movieID={movie.id} />
          <RemovefromWatchList movieID={movie.id} />
          </item>
          </Stack>
      )}
       
      {movie && <div>
        <WhereToView
          movie_id={id}
          movietitle={movie.original_title}
        />
      </div>}
      {movie && <div>
        <SimilarMovies
          movie_id={id}
          movietitle={movie.original_title}
        />
      </div>}
    <Toolbar />
    </Box>
    </Container>
  );
}
