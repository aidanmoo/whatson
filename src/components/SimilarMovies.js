import React from "react";
import { Box, } from "@mui/system";
import GridLayout from "./GridLayout";
import { useState } from "react";
import { Container } from "@mui/material";
import { useFetch } from "../hooks/useFetch";

export default function SimilarMovies(props) {
  const movie_id = props.movie_id;
  const movie_title = props.movie_title;
  const [isAvaliable, setIsAvaliable] = useState(false);
  const [whereAvaliable, setWhereAvaliable] = useState([]);
  const path = "/3/movie/" + movie_id + "/similar?";
  const { data: returnedMovies, isPending, error } = useFetch(path);

//   useEffect(() => {
//     if (WhereToView) {
//       if (WhereToView.results) {
//         if (WhereToView.results.AU) {
//           if (WhereToView.results.AU.flatrate) {
//             setIsAvaliable(true);
//             // setWhereAvaliable(WhereToView.results.AU.flatrate);
//           } else {
//             console.log("Failure Last Step");
//           }
//         } else {
//           console.log("Failure AU");
//         }
//       } else {
//         console.log("Failure results");
//       }
//     }
//   });

  return (
    <Container>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {returnedMovies && (
        <div>
        <h3>Similar Movies</h3>
          <GridLayout isPending={isPending} error={error} movieList={returnedMovies}/>
        </div>
      )}
    </Container>
  );
}
