import TYPES from "../../../src/redux/action/types";
import Search from "../../../src/redux/reducer/search";

describe("Search Reducer", () => {
  let initialState;
  const filterItem = {
    "id": "human",
    "includes": ["human"],
    "excludes": [],
    "label": "Human",
    "category": "species",
    "selected": true
  };
  const sortingOtion = {
    "id": "Acending",
    "label": "Ascending",
    "selected": false
  };

  // UPDATE_RESULTS_SUCCESS: 'update-result-success',
  // UPDATE_RESULTS_ERROR: 'update-result-error',
  // UPDATE_SEARCH_NAME: 'update-search-string',
  // UPDATE_FILTERS: 'update-filters',
  // UPDATE_SORT: 'update-sort'

  beforeEach(() => {
    initialState = {
      name: '',
      filters: [{
        "id": "species",
        "label": "Species",
        "items": [{ ...filterItem }, { ...filterItem, id: '123123' }]
      },
      {
        "id": "species1",
        "label": "Species1",
        "items": [{ ...filterItem }]
      }],
      sortBy: {
        "label": "Sort by Id:",
        "options": [{
            ...sortingOtion
          },
          {
              ...sortingOtion,
              id: 'test-2'
          }
        ]
      },
      results: [1, 2]
    };
  });

  test("Updates name only correctly", () => {
    const action = {
      type: TYPES.UPDATE_SEARCH_NAME,
      payload: 'test'
    };
    const newState = Search(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      name: action.payload
    });
  });

  test("Updates filter", () => {
    const action = {
      type: TYPES.UPDATE_FILTERS,
      payload: filterItem,
    };
    const newState = Search(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      filters: [{
        ...initialState.filters[0],
        items: [{
          ...filterItem,
          selected: false
        },
        {
          ...initialState.filters[0].items[1]
        }]
      },
      {
        ...initialState.filters[1]
      }]
    });
  });


  test("Sorting updates sort and reverses resutls", () => {
    const action = {
      type: TYPES.UPDATE_SORT,
      payload: 'Acending'
    };
    const newState = Search(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      sortBy: { ...initialState.sortBy, options: [{ ...sortingOtion, selected: true }, initialState.sortBy.options[1]]},
      results: initialState.results.reverse()
    });
  });

  test("API search failure", () => {
    const action = {
      type: TYPES.UPDATE_RESULTS_ERROR,
      payload: []
    };
    const newState = Search(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      results: []
    });
  });

  test("API search success", () => {
    const action = {
      type: TYPES.UPDATE_RESULTS_SUCCESS,
      payload: [1,1]
    };
    const newState = Search(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      results: [1,1]
    });
  });
});
