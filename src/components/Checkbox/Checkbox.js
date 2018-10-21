import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Checkbox.scss';

const Checkbox = ({
  className,
  id,
  labelText,
  onChange,
  ...other,
}) => {
  let input;
  const checkboxClasses = classNames(className, {
    'checkbox': true,
  });

  return (
    <div className={checkboxClasses}>
      <input
        {...other}
        type="checkbox"
        className="checkbox__input"
        id={id}
        onChange={evt => {
          onChange(input.checked, id, evt);
        }}
        ref={el => input = el}/>
      <label
        htmlFor={id}
        className="checkbox__label">
        <span className="checkbox__label-text">
          {labelText}
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.node,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: () => {},
  labelText: '',
};

export default Checkbox;
