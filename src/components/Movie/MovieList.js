/* eslint-disable keyword-spacing */
import React from 'react';
import { useMovies } from '../../hooks/movies';
import Movie from './MovieItem';

function MovieList() {
  const { movies } = useMovies();

  return (
    <ul aria-label="movies">
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Movie
              image={movie.url}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              director={movie.director}
              country={movie.country}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
