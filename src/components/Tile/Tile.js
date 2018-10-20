import React from 'react';
import PropTypes from 'prop-types';

import './Tile.scss';

function Tile({children, mixClass = ''}) {
  return (
    <div className={`tile ${mixClass}`}>
      {children}
    </div>
  );
}

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  mixClass: PropTypes.string
};

export default Tile;
