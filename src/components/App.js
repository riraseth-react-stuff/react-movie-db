import React from 'react';
import Header from './elements/Header';
import Home from './Home';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <React.Fragment>
    <Header></Header>
    <Home></Home>
    <GlobalStyle></GlobalStyle>
  </React.Fragment>
);

export default App;
