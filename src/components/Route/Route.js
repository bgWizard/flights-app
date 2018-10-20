import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Route.scss';

const Route = ({
  className,
  data,
}) => {
  const routeClasses = classNames(className, {
    'route': true,
  });

  return (
    <div className={routeClasses}>
      {data.origin}
    </div>
  );
};

Route.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number,
  }),
};

export default Route;
