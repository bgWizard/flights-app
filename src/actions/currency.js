import {
  TOGGLE_CURRENCY,
  GET_CURRENCY_RATES,
  GET_CURRENCY_RATES_SUCCESS,
  GET_CURRENCY_RATES_FAIL,
} from '../constants/actionTypes';
import axios from 'axios';
import { getCurrencyRatesFromResponse } from '../utils/currency';

import { getCurrencyRate } from '../constants/api';

export const toggleCurrencyByIndex = (index) => {
  return {
    type: TOGGLE_CURRENCY,
    index
  };
};

export const getCurrencyRatesRequest = () => {
  return {
    type: GET_CURRENCY_RATES
  };
};

export const getCurrencyRatesRequestSucccess = (rates) => {
  return {
    type: GET_CURRENCY_RATES_SUCCESS,
    rates
  };
};

export const getCurrencyRatesRequestFail = (error) => {
  return {
    type: GET_CURRENCY_RATES_FAIL,
    error
  };
};

export const fetchCurrencyRates = (currency) => {
  return (dispatch) => {
    dispatch(getCurrencyRatesRequest());

    axios.get(getCurrencyRate())
      .then(response => {
        const currencyRates = getCurrencyRatesFromResponse(response, currency);

        dispatch(getCurrencyRatesRequestSucccess(currencyRates))
      })
      .catch(error => dispatch(getCurrencyRatesRequestFail(error)));
  };
};
