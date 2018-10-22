import React from 'react';
import PropTypes from 'prop-types';
import turkishAirlinesLogo from '../../static/turkish-airlines-logo.png';
import turkishAirlinesLogo2x from '../../static/turkish-airlines-logo@2x.png';
import { numberToPrice } from '../../utils/common';
import { currency as currencyNames } from '../../constants/common';

import Tile from '../Tile';
import Button from '../Button';
import Route from '../Route';

import './Ticket.scss';

const Ticket = ({
  data,
  currency,
}) => {
  const {price, ...routeData} = data;
  const priceText = numberToPrice(price, currency);

  return (
    <Tile className="ticket">
      <div className="ticket__col-cta">
        <div className="ticket__company-logo">
          <img
            srcSet={`${turkishAirlinesLogo2x} 2x`}
            src={turkishAirlinesLogo}
            alt="Turkish Airlines"/>
        </div>
        <Button
          className="ticket__btn-buy"
          classMod="primary">
          Купить<br/>за {priceText}
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
  currency: PropTypes.oneOf(Object.values(currencyNames)),
};

export default Ticket;
