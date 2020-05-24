import TYPES from '../action/types';

import getUpdatedFilters from './utils/filters';
import getUpdatedSorting from './utils/sort';

const Search = (state = {}, action) => {
  switch (action.type) {
    case TYPES.UPDATE_SEARCH_NAME:
        return {
          ...state,
          name: action.payload
        };
    case TYPES.UPDATE_FILTERS:
        return {
          ...state,
          filters: getUpdatedFilters(state.filters, action.payload)
        };

    case TYPES.UPDATE_SORT:
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          options: getUpdatedSorting(state.sortBy.options, action.payload),
        },
        results: [ ...state.results ].reverse()
      };
    case TYPES.UPDATE_RESULTS_ERROR:
    case TYPES.UPDATE_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state;
  }
};

export default Search;
