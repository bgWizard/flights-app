import { combineReducers } from 'redux';

import tickets from './tickets';
import filters from './filters';
import currency from './currency';

const rootReducer = combineReducers({
  tickets,
  filters,
  currency,
});

export default rootReducer;
