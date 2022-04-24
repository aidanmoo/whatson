import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Card, Grid, CardMedia, Container } from "@mui/material";

export default function WhereToViewTable(props) {
  const movie_id = props.movie_id;
  const movie_title = props.movie_title;
  const [isAvaliable, setIsAvaliable] = useState(false);
  const [whereAvaliable, setWhereAvaliable] = useState([]);
  const path = "/3/movie/" + movie_id + "/watch/providers?";
  const { data: WhereToView, isPending, error } = useFetch(path);
  let counter = 0;

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
  });

  return (
    <div>
      {/* {isPending && <div>Loading....</div>} */}
      {/* {error && <div>{error}</div>} */}
      {WhereToView && (
        <div>
          {!isAvaliable && (
            <p>Sorry, {movie_title} is not streaming in Australia</p>
          )}
          {isAvaliable &&
            WhereToView.results.AU.flatrate.map((streamingLocation) => (
              <img
                key={streamingLocation.display_priority}
                src={`https://www.themoviedb.org/t/p/w92${streamingLocation.logo_path}`}
                alt={streamingLocation.provider_name}
              />
            ))}
        </div>
      )}
    </div>
  );
}
