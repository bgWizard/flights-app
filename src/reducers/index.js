import { combineReducers } from 'redux';

import tickets from './tickets';
import filterStops from './filterStops';

const rootReducer = combineReducers({
  tickets,
  filterStops,
});

export default rootReducer;
