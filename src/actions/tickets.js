import {
  GET_TICKETS_LIST,
  GET_TICKETS_LIST_SUCCESS,
  GET_TICKETS_LIST_FAIL
} from '../constants/actionTypes';

import axios from 'axios';
import { getTickets } from '../constants/api';
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

    if (process.env.NODE_ENV !== 'production') {
      console.log('!production');
      axios.get(getTickets())
        .then(response => {
          const tickets = preprocessTicketsData(response.data);

          dispatch(getTicketsListRequestSucccess(tickets));
        })
        .catch(error => dispatch(getTicketsListRequestFail(error)))
    } else {
      const tickets = preprocessTicketsData(data.tickets);

      dispatch(getTicketsListRequestSucccess(tickets));
    }
  };
};
