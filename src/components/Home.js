import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const Home = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);
    const response = await axios.get(endpoint).catch(() => setError(true));
    const data = response.data;
    setState(prev => ({
      ...prev,
      movies: [data.results],
      heroImage: prev.heroImage || data.results[0],
      currentPage: data.page,
      totalPages: data.total_pages
    }));
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

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
