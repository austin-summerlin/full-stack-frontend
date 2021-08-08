import React from 'react';
import { useHistory } from 'react-router';
import NewMovie from './NewMovie';
import { getMovie } from '../../services/movies-api';

const EditFormPage = () => {

  const handleUpdate = async (movie) => {
    const history = useHistory();
    const editedMovie = await getMovie(movie);
    history.push(`/movies/${editedMovie.id}`);
  };

  return (
    <div>
      <h2>Edit Movie Info</h2>
      <NewMovie onSubmit={handleUpdate} />
    </div>
  );
};

export default EditFormPage;

