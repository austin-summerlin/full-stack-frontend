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

  return { movies, loading };
};

export const useMovie = (id) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(id)
      .then(setMovie);
  }, [id]);
  console.log(movie);
  return { movie };
};

