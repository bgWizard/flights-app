import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TilesList.scss';

const TilesList = ({
  className,
  children,
}) => {
  const tilesListClasses = classNames(className, {
    'tiles-list': true,
  });

  return (
    <ul className={tilesListClasses}>
      {React.Children.map(children, (child, index) => (
        <li
          key={index}
          className="tiles-list__item">
          {child}
        </li>
      ))}
    </ul>
  );
};

TilesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TilesList;
