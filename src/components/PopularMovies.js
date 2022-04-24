import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import GridLayout from "./GridLayout";
import PaginationView from "./PaginationView";


export default function PopularMovies(params) {
  const [currentPage, setCurrentPage] = useState(1);
  let [currentPageQuery, setCurrentPageQuery] = useState("") 
  const genre = params.selectedGenres.toString();
  let [genreQuery, setGenreQuery] = useState("");
  let certification = params.selectedCertification;
  let [certificationQuery, setCertificationQuery] = useState("");
  const original_language = "en";
  const path = `/3/discover/movie?language=en-AU&watch_region=AU&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&certification.lte=3&${genreQuery}${certificationQuery}${currentPageQuery}`;
  const { data: movieList, isPending, error } = useFetch(path);

  useEffect(() => {
    if (genre) {
      setGenreQuery("with_genres=" + genre + "&");
    } else {
      setGenreQuery("");
    }
  });

  useEffect(() => {
    if (currentPage) {
      setCurrentPageQuery("page=" + currentPage + "&");
    } else {
      setCurrentPageQuery("page=1&");
    }
  });

  useEffect(() => {
    if (certification) {
      setCertificationQuery(
        "certification_country=AU&certification.lte=" + certification + "&"
      );
    } else {
      setCertificationQuery("");
    }
  });

  return (
     <>
    
      <GridLayout isPending={isPending} error={error} movieList={movieList}/>
      
      <PaginationView currentPage={currentPage} setCurrentPage={setCurrentPage} isPending={isPending} error={error} movieList={movieList} />
      </>
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //   {isPending && <div>Loading ...</div>}
    //   {error && <div>{error}</div>}
    //   {movieList &&
    //     movieList.results.map((movie) => (
    //       <Grid item xs={2} sm={4} md={4} key={movie.id} >
    //         <Card className="card" sx={{ maxWidth: 220 }}>
    //           <CardMedia 
    //           component="img"
    //           height="330"
    //           image={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}

    //           />
    //           <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //         {movie.title}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //         {movie.release_date}
    //         </Typography>
    //         </CardContent>
    //         <CardActions>
    //         <Link to={`/movie/${movie.id}`}>See Details</Link>
    //         </CardActions>
    //       </Card>
    //       </Grid>
    //     ))}
    //     </Grid>   
   );
  
}
