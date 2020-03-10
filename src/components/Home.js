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

  if (error) {
    return <div>something went wrong...</div>;
  }
  if (!state.movies[0]) {
    return <Spinner></Spinner>;
  }

  return (
    <React.Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      ></HeroImage>
      <SearchBar></SearchBar>
      <Grid></Grid>
      <MovieThumb></MovieThumb>
      <Spinner></Spinner>
      <LoadMoreBtn></LoadMoreBtn>
    </React.Fragment>
  );
};

export default Home;
