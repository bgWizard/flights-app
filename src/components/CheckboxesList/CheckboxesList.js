import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

import './CheckboxesList.scss';

const CheckboxesList = ({
  className,
  classMod,
  children,
  onItemLinkClick,
  isFirstLinkDisabled,
}) => {
  const checkboxesListClasses = classNames(className, {
    'checkboxes-list': true,
    'checkboxes-list--sidebar': classMod === 'sidebar',
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
          {!(isFirstLinkDisabled && index === 0) &&
          <Button
            onClick={onItemLinkClick(index)}
            className="checkboxes-list__link-only"
            classMod="link">
            Только
          </Button>}
        </li>
      ))}
    </ul>
  );
};

CheckboxesList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classMod: PropTypes.string,
  onItemLinkClick: PropTypes.func,
  isFirstItemLinkDisabled: PropTypes.bool,
};

CheckboxesList.defaultProps = {
  isFirstLinkDisabled: false,
};

export default CheckboxesList;
