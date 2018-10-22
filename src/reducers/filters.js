import {
  TOGGLE_FILTER,
  CHECK_ALL_FILTERS,
  UNCHECK_ALL_FILTERS,
} from '../constants/actionTypes';
import initialState from './initialState';

function filters(state = initialState.filters, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return [
        ...state.slice(0, action.filterIndex),
        {
          ...state[action.filterIndex],
          isChecked: !state[action.filterIndex].isChecked,
        },
        ...state.slice(action.filterIndex + 1),
      ];
    case CHECK_ALL_FILTERS:
      return state.map((filter) => ({
        ...filter,
        isChecked: true,
      }));
    case UNCHECK_ALL_FILTERS:
      return state.map((filter) => ({
        ...filter,
        isChecked: false,
      }));
    default:
      return state;
  }
}

export default filters;
