import {
  GET_TICKETS_LIST,
  GET_TICKETS_LIST_SUCCESS,
  GET_TICKETS_LIST_FAIL
} from '../constants/actionTypes';
import { preprocessTicketsData } from '../utils/tickets';

import data from '../data/tickets.json';

export function getTicketsListRequest () {
  return {
    type: GET_TICKETS_LIST
  };
}

export function getTicketsListRequestSucccess (tickets) {
  return {
    type: GET_TICKETS_LIST_SUCCESS,
    tickets
  };
}

export function getTicketsListRequestFail (error) {
  return {
    type: GET_TICKETS_LIST_FAIL,
    error
  };
}

export function fetchTicketsList () {
  return (dispatch) => {
    dispatch(getTicketsListRequest());

    const tickets = preprocessTicketsData(data);

    dispatch(getTicketsListRequestSucccess(tickets))
  };
}
