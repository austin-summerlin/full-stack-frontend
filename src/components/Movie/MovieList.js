/* eslint-disable keyword-spacing */
import React from 'react';
import { useMovies } from '../../hooks/movies';
import Movie from './MovieItem';
import { Link } from 'react-router-dom';
import style from './MovieList.css';

const MovieList = () => {
  const { movies, loading } = useMovies();


  const movieElements = movies.map((movie) => (
    <li key={movie.id} className={style.li}>
      <Link to={`/movies/${movie.id}`} className={style.link}>
        <Movie {...movie} />
      </Link>
    </li>
  ));
  if (loading) return <h1>Loading</h1>;
  return (
    <section className={style.MoviesList}>
      <h1>Movies</h1>
      <ul>
        {movieElements}
      </ul>
    </section>
  );
};


export default MovieList;
