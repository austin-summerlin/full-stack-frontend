/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { addMovie } from '../../services/movies-api';

const NewMovie = () => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = await addMovie({ title, year, genre, director, country, url });
    console.log(newMovie);
  };

  return (
    <form className="NewMovie" onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Title</span>
          <input type="title" required placeholder="Enter Title" value={title} onChange={((e) => setTitle(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Year</span>
          <input type="year" required placeholder="Enter Year" value={year} onChange={((e) => setYear(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Genre</span>
          <input type="genre" required placeholder="Enter Genre" value={genre} onChange={((e) => setGenre(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Director</span>
          <input type="director" required placeholder="Enter Director" value={director} onChange={((e) => setDirector(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Country</span>
          <input type="country" required placeholder="Enter Country" value={country} onChange={((e) => setCountry(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          <span>Image URL</span>
          <input type="url" required placeholder="Enter Image URL" value={url} onChange={((e) => setUrl(e.target.value))} />
        </label>
      </p>
      <p>
        <button type="submit">Add Movie</button>
      </p>
    </form>
  );
};

export default NewMovie;
