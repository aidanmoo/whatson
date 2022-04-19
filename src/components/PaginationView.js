import React from 'react'
import { Stack, Pagination, Container, Toolbar, PaginationItem } from '@mui/material';

export default function PaginationView(params) {
  const handleChange = (e, value) => {
    params.setCurrentPage(value);
  };

    let currentPage = params.currentPage
     return (
    <Container maxWidth="sm"> 
    <Toolbar />
    {params.movieList && <Stack spacing={2}>
      <Pagination count={params.movieList.total_pages} page={currentPage} onChange={handleChange} variant="outlined" />
    </Stack> 
    
    }
    <Toolbar />
    </Container>
  );
}
