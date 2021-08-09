/* eslint-disable max-len */
import React from 'react';
import NewMovie from '../Form/NewMovie';
import MovieList from '../Movie/MovieList';
import Header from './Header';
import Home from '../Home/Home';
import MovieDetails from '../Movie/MovieDetailPage';
import EditMovie from '../Form/EditMovie';
import { Switch, Route } from 'react-router-dom';
import './App.css';


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/add" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </>
  );
}
