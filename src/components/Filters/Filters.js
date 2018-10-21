import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

import './Filters.scss';

const Filters = ({children}) => {
  return (
    <Tile className="filters">
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          key: index,
          className: 'filters__item',
        })
      ))}
    </Tile>
  );
};

Filters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Filters;
