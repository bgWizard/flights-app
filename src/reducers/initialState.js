import { filterName } from '../constants/common';

export default {
  tickets: {
    tickets: [],
    searchTag: '',
    isLoading: false,
    isLoaded: false,
    hasError: false
  },
  filters: [
    {
      name: filterName.ALL,
      isChecked: true,
    },
    {
      name: filterName.WITHOUT_STOPS,
      isChecked: true,
    },
    {
      name: filterName.ONE_STOP,
      isChecked: true,
    },
    {
      name: filterName.TWO_STOPS,
      isChecked: true,
    },
    {
      name: filterName.THREE_STOPS,
      isChecked: true,
    }
  ]
};
