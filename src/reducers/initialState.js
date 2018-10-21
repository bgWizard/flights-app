import { filterStopsNames } from '../constants/common';

export default {
  tickets: {
    tickets: [],
    searchTag: '',
    isLoading: false,
    isLoaded: false,
    hasError: false
  },
  filterStops: [
    {
      name: filterStopsNames.ALL,
      isChecked: true,
    },
    {
      name: filterStopsNames.WITHOUT_STOPS,
      isChecked: true,
    },
    {
      name: filterStopsNames.ONE_STOP,
      isChecked: true,
    },
    {
      name: filterStopsNames.TWO_STOPS,
      isChecked: true,
    },
    {
      name: filterStopsNames.THREE_STOPS,
      isChecked: true,
    }
  ]
};
