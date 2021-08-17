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
        <img src={movie.image} alt={movie.title} />
        <h1 className={style.title}>{movie.title}</h1>
        <figcaption >
          <p className={style.movie}>Genre: {movie.genre}</p>
          <p className={style.movie}>Year: {movie.year}</p>
          <p className={style.movie}>Director: {movie.director}</p>
          <p className={style.movie}>Country: {movie.country}</p>
        </figcaption>
        <p className={style.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Maiores voluptas corporis asperiores eaque pariatur quasi reprehenderit illum,
          mollitia consequatur libero. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Maiores voluptas corporis asperiores eaque pariatur quasi reprehenderit illum,
          mollitia consequatur libero.
        </p>
        <nav>
          <Link className={style.backButton} to="/movies">Back</Link>
        </nav>
      </figure>

    </>
  );
};

export default MovieDetails;
