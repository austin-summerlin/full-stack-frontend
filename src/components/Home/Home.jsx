import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <span>
          <div className={style.Home}>
            <header>
              <h1>Welcome</h1>
              <Link to="/movies">Enter if you dare...</Link>
              <img className={style.imageHome} src="./movies/tv.png"></img>
            </header>
          </div>
        </span>
      </>
    );
  }
}
