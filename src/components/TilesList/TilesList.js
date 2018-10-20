import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TilesList.scss';

const TilesList = ({
  className,
  items,
  ItemComponent,
}) => {
  const tilesListClasses = classNames(className, {
    'tiles-list': true,
  });

  return (
    <ul className={tilesListClasses}>
      {items.map((item, index) => (
        <li className="tiles-list__item">
          <ItemComponent
            key={index}
            data={item}/>
        </li>
      ))}
    </ul>
  );
};

TilesList.propTypes = {
  items: PropTypes.array.isRequired,
  ItemComponent: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default TilesList;
