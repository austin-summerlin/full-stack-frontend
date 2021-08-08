import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import Header from './components/app/Header';
import Footer from './components/app/Footer';

render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>,
  document.getElementById('root')
);
