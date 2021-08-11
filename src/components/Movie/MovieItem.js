import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieItem.css';

const Movie = ({ title, year, image }) => (
  <section className="movieItem">
    <h2 className={style.title}>{title}</h2>
    <h3>{year}</h3>
    <img src={image} alt={title} className={style.img} />
  </section>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  image: PropTypes.string,
};

export default Movie;
