import { useState, useEffect } from 'react';
import { getMovies, getMovie } from '../services/movies-api';

export const useMovies = (page) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies(page)
      .then(setMovies)
      .finally(() => setLoading(false));
  }, [page]);

  return { movies, loading };
};

export const useMovie = (id) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie(id).then(setMovie);
  }, []);
  return movie;
};

