import { currency as currencyNames } from '../constants/common';

export const getCurrencyRatesFromResponse = (response) => {
  const { rates } = response.data || {};

  return Object.values(currencyNames).reduce((result, currency) => {
    result[currency] = rates[currency];
    return result;
  }, {});
};
