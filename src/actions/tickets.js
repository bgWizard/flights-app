import {
  GET_TICKETS_LIST,
  GET_TICKETS_LIST_SUCCESS,
  GET_TICKETS_LIST_FAIL
} from '../constants/actionTypes';
import { preprocessTicketsData } from '../utils/tickets';

import data from '../data/tickets.json';

export const getTicketsListRequest = () => {
  return {
    type: GET_TICKETS_LIST
  };
};

export const getTicketsListRequestSucccess = (tickets) => {
  return {
    type: GET_TICKETS_LIST_SUCCESS,
    tickets
  };
};

export const getTicketsListRequestFail = (error) => {
  return {
    type: GET_TICKETS_LIST_FAIL,
    error
  };
};

export const fetchTicketsList = () => {
  return (dispatch) => {
    dispatch(getTicketsListRequest());

    const tickets = preprocessTicketsData(data);

    dispatch(getTicketsListRequestSucccess(tickets))
  };
};
