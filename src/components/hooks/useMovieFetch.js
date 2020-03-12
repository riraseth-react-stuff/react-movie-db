import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';
import axios from 'axios';
export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const response = await axios
      .get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)
      .catch(error => console.log(error));

    const creditsReponse = await axios
      .get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .catch(error => console.log(error));

    const directors = creditsReponse.data.crew.filter(
      member => member.job === 'Director'
    );

    setState({
      ...response.data,
      actors: creditsReponse.data.cast,
      directors
    });
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { state, loading };
};
