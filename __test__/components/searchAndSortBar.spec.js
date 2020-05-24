import React from "react";
import { mount } from "enzyme";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SearchAndSortBar from "../../src/components/searchAndSortBar";
import sortBy from "../../src/data/sortConfig.json";
import Search from '../../src/components/core/search';
import Dropdown from '../../src/components/core/dropdown';
import TYPES from "../../src/redux/action/types";


// UPDATE_RESULTS_SUCCESS: 'update-result-success',
// UPDATE_RESULTS_ERROR: 'update-result-error',
// UPDATE_SEARCH_NAME: 'update-search-string',
// UPDATE_FILTERS: 'update-filters',
// UPDATE_SORT: 'update-sort'

describe("App test", () => {
  let appWrapper;
  const mockStore = createMockStore([thunk]);
  const initialState = {
    search: {
      name: '',
      filters: [],
      sortBy: sortBy,
      results: []
    }
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    appWrapper = mount(
      <Provider store={store}>
        <SearchAndSortBar />
      </Provider>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders search form", () => {
    expect(appWrapper.find(Search).length).toEqual(1);
  });

  test("renders sorting options", () => {
    expect(appWrapper.find(Dropdown).length).toEqual(1);
  });

  test("triggers change in dropdown selection action", () => {
    appWrapper.find(Dropdown).find('select').simulate('change', {
      target: {
        value: 'Decending'
      }
    })
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: TYPES.UPDATE_SORT,
        payload: 'Decending'
    }
    ]);
  });

  test("renders change in search and submit triggers update Search string action", () => {
    store = mockStore({ search: { ...initialState.search }});
    appWrapper = mount(
      <Provider store={store}>
        <SearchAndSortBar />
      </Provider>
    );
    appWrapper.find(Search).find('input[name="query"]').at(0).simulate('change', { target: { value: 'test' }});
    appWrapper.find(Search).find('button').at(0).simulate('submit');
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: TYPES.UPDATE_SEARCH_NAME,
        payload: "test"
      }
    ]);
  });
});
