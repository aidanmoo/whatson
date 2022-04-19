import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Card, Grid, CardMedia, Container } from "@mui/material";

export default function WhereToView(props) {
  const movie_id = props.movie_id;
  const movie_title = props.movie_title;
  const [isAvaliable, setIsAvaliable] = useState(false);
  const [whereAvaliable, setWhereAvaliable] = useState([]);
  const path = "/3/movie/" + movie_id + "/watch/providers?";
  const { data: WhereToView, isPending, error } = useFetch(path);
  let counter = 0

  useEffect(() => {
  if (WhereToView) {
    if (WhereToView.results) {
      if (WhereToView.results.AU) {
        if (WhereToView.results.AU.flatrate) {
          setIsAvaliable(true);
          // setWhereAvaliable(WhereToView.results.AU.flatrate); 
        } else {
          console.log("Failure Last Step");
        }
      } else {
        console.log("Failure AU");
      }
    } else {
      console.log("Failure results");
    }
  }
},)

  counter++
  console.log(`${isAvaliable}${counter}`)

  return (
    <Container>
  
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {WhereToView && (
        <div>
          {!isAvaliable && (
            <p>Sorry, {movie_title} is not streaming in Australia</p>
          )}
          {isAvaliable && (
            <h2>Available to stream at:</h2>
      )}
          {isAvaliable &&
            WhereToView.results.AU.flatrate.map((streamingLocation) => (
              <Card className="card"  key={streamingLocation.display_priority} sx={{ maxWidth: 150 }  }>
              <CardMedia
                component="img"
                height="100"
                image={`https://www.themoviedb.org/t/p/original${streamingLocation.logo_path}`}
              />
                  
                 <h4>{streamingLocation.provider_name}</h4>
              </Card>
              
            ))}
        </div>
      )}
    </Container>
  );
}
