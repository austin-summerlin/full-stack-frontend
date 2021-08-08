import React from 'react';
import { useHistory } from 'react-router';
import NewMovie from './NewMovie';
import { addMovie } from '../../services/movies-api';

const FormPage = () => {

  const handleAdd = async (addedMovie) => {
    const history = useHistory();
    const newMovie = await addMovie(addedMovie);
    history.push(`/movies/${newMovie.id}`);
  };

  return (
    <div>
      <h2>Added a new movie</h2>
      <NewMovie onSubmit={handleAdd} />
    </div>
  );
};

export default FormPage;
