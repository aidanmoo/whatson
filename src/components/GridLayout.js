import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import AddtoWatchList from "./AddtoWatchList";
import RemovefromWatchList from "./RemovefromWatchList"

export default function GridLayout(params) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {params.isPending && <div>Loading ...</div>}
      {params.error && <div>{params.error}</div>}
      {params.movieList &&
        params.movieList.results.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie.id}>
            <Card className="card" sx={{ maxWidth: 220 }}>
              <CardMedia
                component="img"
                height="330"
                image={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.release_date}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/movie/${movie.id}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth="true"
                  >
                    See Details
                  </Button>
                </Link>
              </CardActions>
              <CardActions>
                <AddtoWatchList movieID={movie.id} />
                <RemovefromWatchList movieID={movie.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
