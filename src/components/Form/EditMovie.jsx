/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
// import { useForm } from 'react-hook-form';
import { updateMovie } from '../../services/movies-api';

const EditMovie = () => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { id } = useParams();
  const movie = useMovie(id);

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedMovie = await updateMovie(movie, id);
    console.log(editedMovie);
  };

  return (
    <form className="EditForm" onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Title</span>
          <input name="title" required placeholder="Enter Title" value={title} onChange={((e) => setTitle(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Genre</span>
          <input name="genre" required placeholder="Enter Genre" value={genre} onChange={((e) => setGenre(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Year</span>
          <input name="year" required placeholder="Enter Year" value={year} onChange={((e) => setYear(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Director</span>
          <input name="director" required placeholder="Enter Director" value={director} onChange={((e) => setDirector(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Country</span>
          <input name="country" required placeholder="Enter Country" value={country} onChange={((e) => setCountry(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Image URL</span>
          <input name="url" required placeholder="Enter Image URL" value={url} onChange={((e) => setUrl(e.target.value))} />
        </label>
      </p>

      <button id={id} onClick={((e) => updateMovie(e.target.id))}>
        Delete this Movie
      </button>

    </form>
  );
};

export default EditMovie;
