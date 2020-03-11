import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../config';
import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreMovies = () => {
    const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage +
      1}`;

    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage +
      1}`;

    const endpoint = searchTerm ? searchEndPoint : popularEndpoint;
    fetchMovies(endpoint);
  };

  if (error) {
    return <div>something went wrong...</div>;
  }
  if (!movies[0]) {
    return <Spinner></Spinner>;
  }

  return (
    <React.Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      ></HeroImage>
      <SearchBar></SearchBar>
      <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          ></MovieThumb>
        ))}
      </Grid>
      {loading && <Spinner></Spinner>}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="load more" callback={loadMoreMovies}></LoadMoreBtn>
      )}
    </React.Fragment>
  );
};

export default Home;
