import React from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { Container } from "@mui/material";
import GridLayout from "../../components/GridLayout";
import UserMovieDetails from "./UserMovieDetails";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function UsersMovies({ movies }) {
  const { user } = useAuthContext();
  const { deleteDocument, response } = useFirestore("watchList");
 console.log(movies)
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Poster</TableCell>
          <TableCell align="right">Movie Name</TableCell>
          <TableCell align="right">Available On</TableCell>
          <TableCell align="right">Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {movies.map((movie) => (
        <UserMovieDetails movie={movie} />
      ))}
            </TableBody>
      </Table>
    </TableContainer>
  );
}
