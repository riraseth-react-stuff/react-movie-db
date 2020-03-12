import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';
import axios from 'axios';
export const useHomeFetch = searchTerm => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    const response = await axios.get(endpoint).catch(() => setError(true));
    const data = response.data;
    setState(prev => ({
      ...prev,
      movies:
        isLoadMore !== -1 ? [...prev.movies, ...data.results] : data.results,
      heroImage: prev.heroImage || data.results[0],
      currentPage: data.page,
      totalPages: data.total_pages
    }));
    setLoading(false);
  };
  useEffect(() => {
    // if (sessionStorage.homeState) {
    // setState(JSON.parse(sessionStorage.homeState));
    // setLoading(false);
    // } else {
    fetchMovies(POPULAR_BASE_URL);
    // }
  }, []);

  // useEffect(() => {
  //   if (!searchTerm) {
  //     sessionStorage.setItem('homeState', JSON.stringify(state));
  //   }
  // }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies];
};
