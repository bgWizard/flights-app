import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as PlaneIcon } from '../../static/plane-ico.svg';

import './Route.scss';

const Route = ({
  className,
  data,
}) => {
  const routeClasses = classNames(className, {
    'route': true,
  });

  const renderRouteInfo = (
    {
      airport,
      city,
      date,
    },
    isAirportOnRight = false,
  ) => {
    const address = isAirportOnRight
      ? `${city}, ${airport}`
      : `${airport}, ${city}`;

    return (
      <Fragment>
        <p className="route__address">
          {address}
        </p>
        <p className="route__date">
          {date}
        </p>
      </Fragment>
    );
  };

  const renderRouteTime = (time) => (
    <p className="route__time">
      {time}
    </p>
  );

  return (
    <div className={routeClasses}>
      <div className="route__top">
        <div className="route__origin">
          {renderRouteTime(data.departure_time)}
        </div>

        <div className="route__path">
          <p className="route__path-text">
            Stops: {data.stops}
          </p>
          <div className="route__path-line">
            <span className="route__path-plane">
              <PlaneIcon className="route__path-plane-icon"/>
            </span>
          </div>
        </div>

        <div className="route__destination">
          {renderRouteTime(data.arrival_time)}
        </div>
      </div>

      <div className="route__bottom">
        <div className="route__origin">
          {renderRouteInfo(
            {
              airport: data.origin,
              city: data.origin_name,
              date: data.departure_date,
            }
          )}
        </div>

        <div className="route__destination">
          {renderRouteInfo(
            {
              airport: data.destination,
              city: data.destination_name,
              date: data.arrival_date,
            },
            true,
          )}
        </div>
      </div>
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
