import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
  children,
  className,
  classMod,
  href,
  disabled,
  type,
  ...other,
}) => {
  const buttonClasses = classNames(className, {
    'button': true,
    'button--primary': classMod === 'primary',
    'button--secondary': classMod === 'secondary',
    'button--link': classMod === 'link',
  });

  if (href) {
    return (
      <a
        {...other}
        className={buttonClasses}
        href={href}>
        <span className="button__text">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      {...other}
      className={buttonClasses}
      disabled={disabled}
      type={type}>
        <span className="button__text">
          {children}
        </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classMod: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  classMod: 'primary',
  disabled: false,
  type: 'button',
};

export default Button;
