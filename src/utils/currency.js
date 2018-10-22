export const getCurrencyRateFromResponse = (response, currency) => {
  const { rates } = response.data || {};

  return rates[currency] || 1;
};
