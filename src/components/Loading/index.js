import React from 'react';
import { string } from 'prop-types';

import './style.less';

const Transparant = props => {
  const { cssCustom } = props;

  return (
    <div id="loading-transparant" className={`loading ${cssCustom}`}>
      Loading&#8230;
    </div>
  );
};

Transparant.propTypes = {
  cssCustom: string,
};

Transparant.defaultProps = {
  cssCustom: '',
};

export default Transparant;
