/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
import { updateMovie } from '../../services/movies-api';
import FormPage from './FormPage';
import style from './EditMovie.css';

const EditMovie = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, movie } = useMovie(id);

  const [newMovie, setNewMovie] = useState(null);

  useEffect(() => {
    if (!loading) setNewMovie(movie);
  }, [movie, loading]);

  const handleChange = ({ target }) => {
    setNewMovie(prevMovie => ({ ...prevMovie, [target.name]: target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMovie({ id, ...newMovie });

    history.push(`/movies/${id}`);
  };

  if (loading && !newMovie) return <h1>...Loading</h1>;
  return (
    <section className={style.EditMovie}>
      <h1>Edit Movie</h1>
      <FormPage {...newMovie} onSubmit={handleSubmit} onChange={handleChange} />
    </section>
  );
};

export default EditMovie;
