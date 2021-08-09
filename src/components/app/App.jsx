/* eslint-disable max-len */
import React from 'react';
import FormPage from '../Form/FormPage';
import MovieDetails from '../Movie/MovieDetailPage';
import EditFormPage from '../Form/EditFormPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/movies" component={MovieDetails} />
          <Route exact path="/movies/add" component={FormPage} />
          <Route exact path="/movies/:id/edit" component={EditFormPage} />
        </Switch>
      </Router>
    </>
  );
}
