import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieItem.css';

const Movie = ({ title, year, image }) => (
  <section className="movieItem">
    <p className={style.title}>{title}</p>
    <p className={style.year}>{year}</p>
    <img src={image} alt={title} className={style.img} />
  </section>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  image: PropTypes.string,
};

export default Movie;
