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
              <h1>Welcome to Ivy&#39;s House of Horror</h1>
              <Link to="/movies">Enter if you dare...</Link>
            </header>
          </div>
        </span>
      </>
    );
  }
}
