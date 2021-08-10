import { useState, useEffect } from 'react';
import { getMovies, getMovie } from '../services/movies-api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return { loading, movies };
};

export const useMovie = (id) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovie(id)
      .then(setMovie)
      .finally(() => setLoading(false));
  }, [id]);
  return { loading, movie };
};

