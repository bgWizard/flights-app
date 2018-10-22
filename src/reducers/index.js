import { combineReducers } from 'redux';

import tickets from './tickets';
import filters from './filters';

const rootReducer = combineReducers({
  tickets,
  filters,
});

export default rootReducer;
