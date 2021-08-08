/* eslint-disable keyword-spacing */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
import { deleteMovie } from '../../services/movies-api';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useMovie(id);
  if (!movie) return <h1>Loading...</h1>;

  const handleDelete = async () => {
    const movie = useMovie(id);
    await deleteMovie(movie.id);
  };

  return (
    <section>
      <h2>Movie Info</h2>
      <dl data-testid="1">
        <dt>Title</dt>
        <dd>{movie.title}</dd>
        <dt>Poster</dt>
        <dd>
          <img src={movie.url} alt={movie.title} />
        </dd>
        <dt>Genre</dt>
        <dd>{movie.genre}</dd>
        <dt>Year</dt>
        <dd>{movie.year}</dd>
        <dt>Director</dt>
        <dd>{movie.director}</dd>
        <dt>Country</dt>
        <dd>{movie.country}</dd>
      </dl>
      <Link to={`/movies/${movie.id}/edit`}>
        Edit Movie Info
      </Link>
      <button onClick={handleDelete}>
        Delete Movie
      </button>
    </section>
  );
};

export default MovieDetails;
