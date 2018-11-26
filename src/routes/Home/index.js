import React from 'react';
import Loadable from 'react-loadable';
// import Loader from '../../components/AppHeader/Loader';
// import ErrorBoundary from '../../components/ErrorBoundary';

const Loading = props => {
  if (props.error || props.timedOut) {
    return <div>Terjadi kesalahan, silahkan coba lagi</div>;
  } else if (props.pastDelay) {
    return <div>Loading ....</div>;
  } else {
    return null;
  }
};

export const HomeComponent = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../Home/components/View'),
  loading: Loading,
  delay: 0, // delay in milliseconds, useful for suspense
});
