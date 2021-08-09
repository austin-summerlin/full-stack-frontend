/* eslint-disable keyword-spacing */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
import { deleteMovie } from '../../services/movies-api';
import style from './MovieDetailPage.css';

const MovieDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  let { movie } = useMovie(id);



  const handleClick = async () => {
    const confirmation = 'Are you sure?';
    if (!window.confirm(confirmation)) return;

    try {
      movie = null;
      await deleteMovie(id);
      history.push('/movies');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <figure className={style.movie}>
      <h1>{movie.title}</h1>
      <img src={movie.url} alt={movie.title} />
      <figcaption>
        <p>Genre: {movie.genre}</p>
        <p>Year: {movie.year}</p>
        <p>Director: {movie.director}</p>
        <p>Country: {movie.country}</p>
      </figcaption>
      <nav>
        <Link to={`/movies/${movie.id}/edit`}>Edit</Link>
        <button onClick={handleClick}>Delete</button>
        <Link to="/movies">Back</Link>
      </nav>
    </figure>
  );
};

export default MovieDetails;
