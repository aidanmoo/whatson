import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import PaginationView from "../components/PaginationView";
import { useState, useEffect } from "react";
import GridLayout from "../components/GridLayout";

export default function MovieSearchResults(params) {
  // const searchTerm = params.searchedFor;
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  
  const [currentPage, setCurrentPage] = useState(1);
  let [currentPageQuery, setCurrentPageQuery] = useState("") 
  const path = "/3/search/movie?query=" + query + "&include_adult=false&"+currentPageQuery;
  const { data: movieList, isPending, error } = useFetch(path);
  

  useEffect(() => {
    if (currentPage) {
      setCurrentPageQuery("page=" + currentPage + "&");
    } else {
      setCurrentPageQuery("page=1&");
    }
  });

  return (
    <>
    
      <GridLayout isPending={isPending} error={error} movieList={movieList}/>
      
      <PaginationView currentPage={currentPage} setCurrentPage={setCurrentPage} isPending={isPending} error={error} movieList={movieList} />
      </>
//     <div>
//       {isPending && <div>Loading ...</div>}
//       {error && <div>{error}</div>}
//       {movieList &&
//         movieList.results.map((movie) => (
//           <div key={movie.id} className="card">
//             <h3>{movie.title}</h3>
//             <p>{movie.release_date}</p>
//             <Link to={`/movie/${movie.id}`}>See Details</Link>
//           </div>
//         ))}

// <PaginationView currentPage={currentPage} setCurrentPage={setCurrentPage} isPending={isPending} error={error} movieList={movieList} />
    
//     </div>
  );
}
