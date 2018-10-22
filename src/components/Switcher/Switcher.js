import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Switcher.scss';

const Switcher = ({
  className,
  onChange,
  activeItemIndex,
  children,
}) => {
  const switcherClasses = classNames(className, {
    'switcher': true,
  });

  return (
    <div className={switcherClasses}>
      {React.Children.map(children, (child, index) => {
        let className = 'switcher__item';

        if (index === activeItemIndex) {
          className = `${className} ${className}--active`
        }

        return (
          <button
            key={index}
            type="button"
            className={className}
            onClick={onChange(index, child)}>
            {child}
          </button>
        )
      })}
    </div>
  );
};

Switcher.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  activeItemIndex: PropTypes.number,
};

export default Switcher;
