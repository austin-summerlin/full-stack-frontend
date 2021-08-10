/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addMovie } from '../../services/movies-api';
import FormPage from './FormPage';
import style from './NewMovie.css';

const AddMovie = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(null);

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [url, setUrl] = useState('');
  const [movie, setMovie] = useState({});

  const handleChange = ({ target }) => {
    switch (target.title) {
      case 'title':
        setTitle(target.value);
        break;
      case 'year':
        setYear(target.value);
        break;
      case 'genre':
        setGenre(target.value);
        break;
      case 'director':
        setDirector(target.value);
        break;
      case 'country':
        setCountry(target.value);
        break;
      case 'url':
        setUrl(target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const newMovie = await addMovie({
      title,
      year,
      genre,
      director,
      country,
      url,
    });
    setMovie(newMovie);
    setLoading(false);
    history.push(`/movies/${newMovie.id}`);
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <section className={style.AddMovie}>
      <h1>Add a Movie</h1>
      <FormPage {...movie} onChange={handleChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default AddMovie;
