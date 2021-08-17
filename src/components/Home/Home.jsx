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
              <h1><Link to="/movies"><p>Enter if you dare...</p></Link></h1>
            </header>
          </div>
        </span>
      </>
    );
  }
}
