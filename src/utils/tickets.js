import {formatDate} from './common';
import { filterStopsNames } from '../constants/common';

export const preprocessTicketsData = ({tickets}) => {
  return tickets
    .sort((a, b) => a.price - b.price)
    .map((ticket) => {
      const {departure_date, arrival_date} = ticket;

      const formattedDepartureDate = formatDate(departure_date);
      const formattedArrivalDate = formatDate(arrival_date);

      return {
        ...ticket,
        departure_date: formattedDepartureDate,
        arrival_date: formattedArrivalDate,
      }
    });
};

const stopsNameToStopsNumberMapping = {
  [filterStopsNames.WITHOUT_STOPS]: 0,
  [filterStopsNames.ONE_STOP]: 1,
  [filterStopsNames.TWO_STOPS]: 2,
  [filterStopsNames.THREE_STOPS]: 3,
};

const isFilterStopsAllChecked = (stopsFilters) => {
  return Boolean(stopsFilters.find(filter => filter.name === filterStopsNames.ALL));
};

export const filterTicketsByFilterStops = (tickets, stopsFilters) => {
  const activeFilters = stopsFilters.filter((filter) => filter.isChecked);

  if (isFilterStopsAllChecked(activeFilters)) {
    return tickets;
  }

  const allowedStops = activeFilters.map(filter => stopsNameToStopsNumberMapping[filter.name]);

  return tickets.filter(ticket => allowedStops.includes(ticket.stops))
};
