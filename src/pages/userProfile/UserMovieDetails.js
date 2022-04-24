import React from "react";
import { useFetch } from "../../hooks/useFetch";
import WhereToView from "../../components/WhereToView";
import { Button } from "@mui/material";
import { useFirestore } from "../../hooks/useFirestore";
import WhereToViewTable from "../../components/WhereToViewTable";
import { TableRow, TableCell } from "@mui/material";

export default function UserMovieDetails(movie) {
  console.log("movie");
  console.log(movie);
  console.log("movie");
  let id = movie.movie.movieID;
  const path = "/3/movie/" + id + "?";
  const { data: movieDetails, isPending, error } = useFetch(path);
  const { deleteDocument, response } = useFirestore("watchList");

  return (
<>
    {movieDetails && <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            key={id}>
         <TableCell component="th" scope="row"><img src={`https://image.tmdb.org/t/p/w92${movieDetails.poster_path}`} alt="" /></TableCell>
         <TableCell align="right">{movieDetails.original_title}</TableCell>
         <TableCell align="right"><WhereToViewTable movie_id={id} movietitle={movieDetails.original_title} /> </TableCell>
         <TableCell align="right"><Button onClick={() => deleteDocument(movie.movie.id)}>Remove</Button></TableCell>
    </TableRow>}
    </>
  );
}
