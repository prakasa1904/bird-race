import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';

import configureStore from './redux/configure';
import App from './App';

const browserHistory = createBrowserHistory();
const store = configureStore(window.__data, browserHistory);

global.terpusatBurung = store;
browserHistory.listen(location => {
  /**
   * On location changes Do Something ....
   */
});

Loadable.preloadReady().then(() => {
  const container = document.getElementById('devetek');
  const bootstrap = window.ssr ? hydrate : render;
  const props = {
    store,
    history: browserHistory,
  };

  bootstrap(<App {...props} />, container);
});
