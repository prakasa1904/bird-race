import React from 'react';

import LoadingWrapper from '@components/Loading';

class LogoutView extends React.Component {
  onClickFollow = () => {
    console.log('Following !!!');
  };

  render() {
    return <LoadingWrapper cssCustom="full-page" />;
  }
}

export default LogoutView;
