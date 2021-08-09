import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={style.Home}>
        <header>
          <h2>Welcome to Ivy's House of Horror</h2>

        </header>

        <p>
          <Link to="/movies"><h1>Enter if you dare...</h1></Link>
        </p>
      </div>
    );
  }
}
