import React from 'react';
// components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
  const { state: movie, loading } = useMovieFetch(movieId);

  if (!movie) {
    return <div>something went wrong</div>;
  }

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <React.Fragment>
      <Navigation movie={movie.original_title}></Navigation>
      <MovieInfo movie={movie}></MovieInfo>
      <MovieInfoBar></MovieInfoBar>
      <Grid>
        <Actor></Actor>
      </Grid>
    </React.Fragment>
  );
};

export default Movie;
