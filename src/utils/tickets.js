import {formatDate} from './common';

export function preprocessTicketsData({tickets}) {
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
}
