import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NotifyMeassage.scss';

const NotifyMeassage = ({
  type,
  className,
  children
}) => {
  const notifyMeassageClasses = classNames(className, {
    'notify-meassage': true,
    'notify-meassage--error': type === 'error',
    'notify-meassage--loading': type === 'loading',
  });

  return (
    <div className={notifyMeassageClasses}>
      <p className="notify-meassage__content">
        {children}
      </p>
    </div>
  );
};

NotifyMeassage.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default NotifyMeassage;
