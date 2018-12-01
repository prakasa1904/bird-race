import React from 'react';
import { hot } from 'react-hot-loader';
import { object } from 'prop-types';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

App.propTypes = {
  history: object.isRequired,
  store: object.isRequired,
};

export default hot(module)(App);
