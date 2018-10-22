import { BASE_CURRENCY } from './common'

export const getCurrencyRate = (baseCurrency = BASE_CURRENCY) => {
  return `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`;
};

export const getTickets = () => {
  return 'http://localhost:3003/tickets';
};
