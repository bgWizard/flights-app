import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

import './CheckboxesList.scss';

const CheckboxesList = ({
  className,
  children,
}) => {
  const checkboxesListClasses = classNames(className, {
    'checkboxes-list': true,
  });

  return (
    <ul className={checkboxesListClasses}>
      {React.Children.map(children, (child, index) => (
        <li
          key={index}
          className="checkboxes-list__item">
          {React.cloneElement(child, {
            className: 'checkboxes-list__checkbox',
          })}
          <Button
            className="checkboxes-list__link-only"
            classMod="link">
            Только
          </Button>
        </li>
      ))}
    </ul>
  );
};

CheckboxesList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CheckboxesList;
