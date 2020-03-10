import React, { useState, useEffect } from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  return (
    <React.Fragment>
      <HeroImage></HeroImage>
      <SearchBar></SearchBar>
      <Grid></Grid>
      <MovieThumb></MovieThumb>
      <Spinner></Spinner>
      <LoadMoreBtn></LoadMoreBtn>
    </React.Fragment>
  );
};

export default Home;
