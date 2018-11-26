import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { object } from 'prop-types';
import { createBrowserHistory } from 'history';
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
