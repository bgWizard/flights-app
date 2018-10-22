import {
  TOGGLE_CURRENCY,
  GET_CURRENCY_RATE,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAIL,
} from '../constants/actionTypes';
import axios from 'axios';
import { getCurrencyRateFromResponse } from '../utils/currency';

import { getCurrencyRate } from '../constants/api';
import { BASE_CURRENCY } from '../constants/common'

export const toggleCurrencyByIndex = (index) => {
  return {
    type: TOGGLE_CURRENCY,
    index
  };
};

export const getCurrencyRateRequest = () => {
  return {
    type: GET_CURRENCY_RATE
  };
};

export const getCurrencyRateRequestSucccess = (rate) => {
  return {
    type: GET_CURRENCY_RATE_SUCCESS,
    rate
  };
};

export const getCurrencyRateRequestFail = (error) => {
  return {
    type: GET_CURRENCY_RATE_FAIL,
    error
  };
};

export const fetchCurrencyRate = (currency) => {
  return (dispatch) => {
    dispatch(getCurrencyRateRequest());

    axios.get(getCurrencyRate())
      .then(response => {
        const currencyRate = getCurrencyRateFromResponse(response, currency);

        dispatch(getCurrencyRateRequestSucccess(currencyRate))
      })
      .catch(error => dispatch(getCurrencyRateRequestFail(error)));
  };
};

export const toggleCheckedCurrency = (index, currency) => {
  return (dispatch) => {
    dispatch(toggleCurrencyByIndex(index));

    if (currency === BASE_CURRENCY) {
      dispatch(getCurrencyRateRequestSucccess(1));
    } else {
      dispatch(fetchCurrencyRate(currency));
    }
  };
};
