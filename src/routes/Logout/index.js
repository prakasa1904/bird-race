import React from 'react';
import { bool, object } from 'prop-types';
import Loadable from 'react-loadable';

import LoadingWrapper from '@components/Loading';

const Loading = props => {
  const { timedOut, error, pastDelay } = props;

  if (error || timedOut) {
    return <div>Terjadi kesalahan, silahkan coba lagi</div>;
  }

  if (pastDelay) {
    return <LoadingWrapper />;
  }

  return null;
};

Loading.propTypes = {
  error: object,
  pastDelay: bool.isRequired,
  timedOut: bool.isRequired,
};

Loading.defaultProps = {
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const LogoutComponent = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ '../Logout/components/View'),
  loading: Loading,
  delay: 0, // delay in milliseconds, useful for suspense
});
