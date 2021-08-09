import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieItem.css';

const Movie = ({ title, genre, url }) => (
  <figure className={style.movie}>
    <h2>Name: {title}</h2>
    <h3>Genre: {genre}</h3>
    <img src={url} alt={title} />
  </figure>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Movie;
