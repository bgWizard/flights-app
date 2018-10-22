import {
  TOGGLE_CURRENCY,
  GET_CURRENCY_RATE,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAIL,
} from '../constants/actionTypes';
import initialState from './initialState';

function currency(state = initialState.currency, action) {
  switch (action.type) {
    case TOGGLE_CURRENCY:
      return {
        ...state,
        checkedCurrencyIndex: action.index
      };
    case GET_CURRENCY_RATE:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        hasError: false
      };
    case GET_CURRENCY_RATE_SUCCESS:
      return {
        ...state,
        currencyRate: action.rate,
        isLoading: false,
        isLoaded: true
      };
    case GET_CURRENCY_RATE_FAIL:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        isLoaded: true
      };
    default:
      return state;
  }
}

export default currency;
