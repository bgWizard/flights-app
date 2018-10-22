import {
  TOGGLE_FILTER,
  CHECK_ALL_FILTERS,
  UNCHECK_ALL_FILTERS,
} from '../constants/actionTypes';

export const toggleFilterByName = (filterIndex) => {
  return {
    type: TOGGLE_FILTER,
    filterIndex
  };
};

export const checkAllFilters = () => {
  return {
    type: CHECK_ALL_FILTERS
  };
};

export const uncheckAllFilters = () => {
  return {
    type: UNCHECK_ALL_FILTERS
  };
};
