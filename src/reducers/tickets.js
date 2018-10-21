import {
  GET_TICKETS_LIST,
  GET_TICKETS_LIST_SUCCESS,
  GET_TICKETS_LIST_FAIL
} from '../constants/actionTypes';
import initialState from './initialState';

function tickets(state = initialState.tickets, action) {
  switch (action.type) {
    case GET_TICKETS_LIST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        hasError: false
      };
    case GET_TICKETS_LIST_SUCCESS:
      return {
        ...state,
        tickets: action.tickets,
        isLoading: false,
        isLoaded: true
      };
    case GET_TICKETS_LIST_FAIL:
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

export default tickets;
