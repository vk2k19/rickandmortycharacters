/* Core */
import { createSlice } from '@reduxjs/toolkit'
import * as thunks from '@/lib/redux/slices/thunks'
import getUpdatedFilters from '@/lib/redux/slices/utils/filters'
import getUpdatedSorting from '@/lib/redux/slices/utils/sort'


const initialState = {
  name: '',
  filters: [],
  sortBy: [],
  results: null
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateSearchString: (state, action) => {
      state.name = action.payload
    },
    updateFilters: (state, action) => {
      state.filters = getUpdatedFilters(state.filters, action.payload)
    },
    updateSortString: (state, action) => {
      state.sortBy.options = getUpdatedSorting(state.sortBy.options, action.payload);
      state.results = state.results.reverse();
    },
    updateResult: (state, action) => {
      state.results = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.getCharactersAsync.fulfilled, (state, action) => {
      state.results = action.payload
    })
    builder.addCase(thunks.getFiltersAsync.fulfilled, (state, action) => {
      state.filters = action.payload
    })
    builder.addCase(thunks.getSortOptionsAsync.fulfilled, (state, action) => {
      state.sortBy = action.payload
    })
  }
})

export const { updateResult, updateSearchString, updateFilters, updateSortString } = searchSlice.actions
