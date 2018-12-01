import React from 'react';
import { bool, number, object } from 'prop-types';
import Loadable from 'react-loadable';

const Loading = props => {
  const { timedOut, error, pastDelay } = props;

  if (error || timedOut) {
    return <div>Terjadi kesalahan, silahkan coba lagi</div>;
  }

  if (pastDelay) {
    return <div>Loading ....</div>;
  }

  return null;
};

Loading.propTypes = {
  error: object.isRequired,
  pastDelay: bool.isRequired,
  timedOut: number.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export const ProfileComponent = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ '../Profile/components/View'),
  loading: Loading,
  delay: 0, // delay in milliseconds, useful for suspense
});
