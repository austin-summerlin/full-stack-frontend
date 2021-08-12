import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={style.Header}>
        <h1>HoH</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

    );
  }
}

export default Header;
