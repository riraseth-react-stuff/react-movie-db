import React from 'react';
import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';

import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <React.Fragment>
    <Header></Header>
    <Router>
      <Home path="/"></Home>
      <Movie path="/:movieId"></Movie>
      <NotFound default></NotFound>
    </Router>
    <GlobalStyle></GlobalStyle>
  </React.Fragment>
);

export default App;
