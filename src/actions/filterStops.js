import {
  TOGGLE_STOP_FILTER,
  CHECK_ALL_STOPS_FILTER,
  UNCHECK_ALL_STOPS_FILTER,
} from '../constants/actionTypes';

export const toggleStopFilterByName = (filterIndex) => {
  return {
    type: TOGGLE_STOP_FILTER,
    filterIndex
  };
};

export const checkAllStopsFilter = () => {
  return {
    type: CHECK_ALL_STOPS_FILTER
  };
};


export const uncheckAllStopsFilter = () => {
  return {
    type: UNCHECK_ALL_STOPS_FILTER
  };
};
