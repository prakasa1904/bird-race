import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import actions from './modules';

export default function configureStore(preloadedState = {}) {
  const DEV = process.env.NODE_ENV !== 'production';
  const middleware = [thunk];
  let composeEnhancers = compose;

  if (typeof window !== 'undefined' && DEV) {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionCreators: actions,
      });
    }
  }

  if (typeof window !== 'undefined') {
    preloadedState = {
      ...preloadedState,
    };
  }

  const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middleware)));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducers(require('./reducers').default);
    });
  }

  return store;
}
