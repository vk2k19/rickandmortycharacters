import React from "react";
import { mount } from "enzyme";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SelectedFilters from "../../src/components/selectedFilters";
import filterConfig from "../../src/data/filterConfig.json";
import Tag from "../../src/components/core/tag";
import TYPES from "../../src/redux/action/types";

describe("App test", () => {
  let appWrapper;
  const mockStore = createMockStore([thunk]);
  const initialState = {
    search: {
      name: '',
      filters: filterConfig,
      sortBy: {},
      results: []
    }
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    appWrapper = mount(
      <Provider store={store}>
        <SelectedFilters />
      </Provider>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders selected filters", () => {
    expect(appWrapper.find(Tag).length).toEqual(2);
  });

  test("renders selected filters and searched name", () => {
    store = mockStore({ search: { ...initialState.search, name: 'test' }});
    appWrapper = mount(
      <Provider store={store}>
        <SelectedFilters />
      </Provider>
    );

    expect(appWrapper.find(Tag).length).toEqual(3);
  });

  test("renders selected filters", () => {
    appWrapper.find(Tag).find('button').at(0).simulate('click')
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: TYPES.UPDATE_FILTERS,
        payload: filterConfig[0].items[0]
      }
    ]);
  });

  test("renders selected filters and searched name", () => {
    store = mockStore({ search: { ...initialState.search, name: 'test' }});
    appWrapper = mount(
      <Provider store={store}>
        <SelectedFilters />
      </Provider>
    );
    appWrapper.find(Tag).find('button').at(2).simulate('click');
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: TYPES.UPDATE_SEARCH_NAME,
        payload: ""
      }
    ]);
  });
});
