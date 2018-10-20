import React, { Component } from 'react';

import tickets from '../data/tickets.json';

import TilesList from '../components/TilesList';
import Ticket from '../components/Ticket';

class TicketsListContainer extends Component {
  render() {
    return (
      <TilesList
        items={tickets.tickets}
        ItemComponent={Ticket}
      />
    );
  }
}

export default TicketsListContainer;
