import filterByOptions from '@/lib/redux/slices/utils/filterByOptions';
import filterByName from '@/lib/redux/slices/utils/filterByName';

export const getSearchString = (state) =>  state?.search?.name ?? '';
export const getFilters = (state) =>  state?.search?.filters ?? [];
export const getResults = (state) =>  state?.search?.results ?? [];
export const getSortOptions = (state) =>  state?.search?.sortBy ?? [];

export const getFilteredResults = (search) => {
  const filteredResults = filterByOptions(filterByName(search.results, search.name), search.filters);
  return {
    hasResults: filteredResults && filteredResults.length > 0,
    results: filteredResults
  };
}

export const getSetOptions =  (filters = [], name = '') => {
    const selectedFilters = (filters)
    .flatMap(filter => filter.items)
    .filter(item => item.selected)
    return {
        hasFilter: selectedFilters.length > 0 || !!name,
        selectedFilters
    }
}