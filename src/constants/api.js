import { BASE_CURRENCY } from './common'

export function getCurrencyRate(baseCurrency = BASE_CURRENCY) {
  return `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`;
}
