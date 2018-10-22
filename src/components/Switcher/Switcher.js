import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Switcher.scss';

const Switcher = ({
  className,
}) => {
  const filterClasses = classNames(className, {
    'switcher': true,
  });

  return (
    <div className={filterClasses}>
      Switcher
    </div>
  );
};

Switcher.propTypes = {
  className: PropTypes.string,
};

export default Switcher;
