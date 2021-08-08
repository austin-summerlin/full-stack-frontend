/* eslint-disable keyword-spacing */
import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/movies';
import Movie from './MovieItem';

const MovieList = () => {
  const { movies, loading } = useMovies();
  if (loading) return <h1>Loading...</h1>;

  const movieElements = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/${movie.id}`}>
        <Movie movie={movie} />
      </Link>
    </li>
  ));
  return (
    <ul>
      {movieElements}
    </ul>
  );
};

export default MovieList;
