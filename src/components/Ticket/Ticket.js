import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';
import Button from '../Button';
import Route from '../Route';

import './Ticket.scss';

const Ticket = ({
  data,
}) => {
  const {price, ...routeData} = data;

  return (
    <Tile className="ticket">
      <div className="ticket__col-cta">
        <div className="ticket__company-logo">
          <img src="#src" alt="alt"/>
        </div>
        <Button
          className="ticket__btn-buy"
          classMod="primary">
          Buy for ${price}
        </Button>
      </div>
      <div className="ticket__col-info">
        <Route className="ticket__route" data={routeData}/>
      </div>
    </Tile>
  );
};

Ticket.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Ticket;
