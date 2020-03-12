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
      <MovieInfoBar {...movie}></MovieInfoBar>
      <Grid header="Actors">
        {movie.actors.map(actor => (
          <Actor key={actor.credit_id} actor={actor}></Actor>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Movie;
