import {formatDate} from './common';
import { filterName } from '../constants/common';

export const preprocessTicketsData = (data) => {
  return data
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

const filterToValueMapping = {
  [filterName.WITHOUT_STOPS]: 0,
  [filterName.ONE_STOP]: 1,
  [filterName.TWO_STOPS]: 2,
  [filterName.THREE_STOPS]: 3,
};

const isFilterNameAllChecked = (filters) => {
  return Boolean(filters.find(filter => filter.name === filterName.ALL));
};

export const filterTickets = (tickets, filters) => {
  const activeFilters = filters.filter((filter) => filter.isChecked);

  if (isFilterNameAllChecked(activeFilters)) {
    return tickets;
  }

  const allowedValues = activeFilters.map(filter => filterToValueMapping[filter.name]);

  return tickets.filter(ticket => allowedValues.includes(ticket.stops))
};

export const updateTicketsPriceByRate = (tickets, rate) => {
  if (tickets.length <= 0) {
    return tickets;
  }

  return tickets.map((ticket) => {
    const newPrice = (ticket.price * rate).toFixed(0);

    return {
      ...ticket,
      price: newPrice,
    }
  });
};
