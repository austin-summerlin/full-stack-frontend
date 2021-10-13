import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieItem.css';

const Movie = ({ title, image, year }) => (
  <section className="movieItem">
    <p className={style.title}>{title}</p>
    <p className={style.year}>{year}</p>
    <img src={image} alt={title} className={style.img} />
  </section>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Movie;
