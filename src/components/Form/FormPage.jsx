/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './FormPage.css';

const FormPage = ({ title, genre, director, year, url, country, onChange, onSubmit }) => {
  return (
    <section className={style.FormPage}>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            required
            name="title"
            value={title}
            onChange={onChange}
          />
        </label>

        <label>
          Genre:
          <input
            required
            name="genre"
            value={genre}
            onChange={onChange}
          />
        </label>

        <label>
          Director:
          <input
            required
            name="director"
            value={director}
            onChange={onChange}
          />
        </label>

        <label>
          Year:
          <input
            required
            name="year"
            value={year}
            onChange={onChange}
          />
        </label>

        <label>
          Country:
          <input
            required
            name="country"
            value={country}
            onChange={onChange}
          />
        </label>

        <label>
          URL:
          <input
            required
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>

        <div>
          <button>Submit</button>
        </div>
      </form>
      <Link to="/movies">Return to All Movies</Link>
    </section>
  );
};

FormPage.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  director: PropTypes.string,
  year: PropTypes.number,
  url: PropTypes.string,
  country: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default FormPage;
