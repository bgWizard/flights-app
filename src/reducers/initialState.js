import { filterName, currency } from '../constants/common';

export default {
  tickets: {
    tickets: [],
    isLoading: false,
    isLoaded: false,
    hasError: false
  },
  filters: [
    {
      name: filterName.ALL,
      isChecked: true,
    },
    {
      name: filterName.WITHOUT_STOPS,
      isChecked: true,
    },
    {
      name: filterName.ONE_STOP,
      isChecked: true,
    },
    {
      name: filterName.TWO_STOPS,
      isChecked: true,
    },
    {
      name: filterName.THREE_STOPS,
      isChecked: true,
    }
  ],
  currency: {
    currencies: [
      currency.RUB,
      currency.USD,
      currency.EUR,
    ],
    checkedCurrencyIndex: 0,
    currencyRates: {
      [currency.RUB]: 1,
    },
    isLoading: false,
    isLoaded: false,
    hasError: false
  }
};
