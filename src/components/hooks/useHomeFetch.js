import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import axios from 'axios';
export const useHomeFetch = () => {
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

  return [{ state, loading, error }, fetchMovies];
};
