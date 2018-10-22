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
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          isChecked: !state[action.index].isChecked,
        },
        ...state.slice(action.index + 1),
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
