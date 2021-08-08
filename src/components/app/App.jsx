/* eslint-disable max-len */
import React, { Component } from 'react';
import Home from '../Home/Home';
import FormPage from '../Form/FormPage';
import MovieDetails from '../Movie/MovieDetailPage';
import EditFormPage from '../Form/EditFormPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.css';


class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/add" component={FormPage} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies/:id/edit" component={EditFormPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

