import React from 'react';
import PropTypes from 'prop-types';

import './TilesList.scss';

function TilesList({mixClass = '', items, ItemComponent}) {
  return (
    <ul className={`tiles-list ${mixClass}`}>
      {items.map((item, index) => (
        <li className="tiles-list__item">
          <ItemComponent
            key={index}
            item={item}/>
        </li>
      ))}
    </ul>
  );
}

TilesList.propTypes = {
  items: PropTypes.array.isRequired,
  ItemComponent: PropTypes.element.isRequired,
  mixClass: PropTypes.string,
};

export default TilesList;
