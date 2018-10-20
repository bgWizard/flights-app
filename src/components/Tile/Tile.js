import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tile.scss';

const Tile = ({
  children,
  className,
}) => {
  const tileClasses = classNames(className, {
    'tile': true,
  });

  return (
    <div className={tileClasses}>
      {children}
    </div>
  );
};

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tile;
