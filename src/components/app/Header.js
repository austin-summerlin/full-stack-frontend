import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h1>Ivy&#39;s House of Horror</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/movies/add">Add Movie</NavLink>
        </nav>
      </header>

    );
  }
}

export default Header;
