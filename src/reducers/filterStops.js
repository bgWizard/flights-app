import {
  TOGGLE_STOP_FILTER,
  CHECK_ALL_STOPS_FILTER,
  UNCHECK_ALL_STOPS_FILTER,
} from '../constants/actionTypes';
import initialState from './initialState';

function filterStops(state = initialState.filterStops, action) {
  switch (action.type) {
    case TOGGLE_STOP_FILTER:
      return [
        ...state.slice(0, action.filterIndex),
        {
          ...state[action.filterIndex],
          isChecked: !state[action.filterIndex].isChecked,
        },
        ...state.slice(action.filterIndex + 1),
      ];
    case CHECK_ALL_STOPS_FILTER:
      return state.map((filter) => ({
        ...filter,
        isChecked: true,
      }));
    case UNCHECK_ALL_STOPS_FILTER:
      return state.map((filter) => ({
        ...filter,
        isChecked: false,
      }));
    default:
      return state;
  }
}

export default filterStops;
