/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
import style from './MovieDetailPage.css';

const MovieDetails = () => {
  const { id } = useParams();
  const { loading, movie } = useMovie(id);

  if (loading) return <h1>Loading...</h1>;
  return (

    <>
      <figure className={style.movieDetailPage}>
        <img className={style.movieimage} src={movie.image} alt={movie.title} />
        <h1 className={style.title}>{movie.title}</h1>
        <figcaption className={style.movieInfo}>
          <p className={style.movie}>Year: {movie.year}</p>
          <p className={style.movie}>Genre: {movie.genre}</p>
          <p className={style.movie}>Director: {movie.director}</p>
          <p className={style.movie}>Writer(s): {movie.writer}</p>
          <p className={style.movie}>Synopsis: {movie.synopsis}</p>
          <p className={style.movie}>Country: {movie.country}</p>
        </figcaption>
        <nav>
          <Link className={style.backButton} to="/movies">Back</Link>
        </nav>
      </figure>

    </>
  );
};

export default MovieDetails;


// map through movie.genre and display them as a list

