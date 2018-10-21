import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Filter.scss';

const Filter = ({
  className,
  title,
  children,
}) => {
  const filterClasses = classNames(className, {
    'filter': true,
  });

  return (
    <div className={filterClasses}>
      <div className="filter__header">
        <h3 className="filter__title">
          {title}
        </h3>
      </div>
      <div className="filter__body">
        {children}
      </div>
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

export default Filter;
