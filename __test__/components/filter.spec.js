import React from "react";
import { mount } from "enzyme";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Filter from "../../src/components/filter";
import filterConfig from "../../src/data/filterConfig.json";
import FilterOptions from "../../src/components/core/filterOptions";
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
        <Filter />
      </Provider>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders various filter options", () => {
    expect(appWrapper.find(FilterOptions).length).toEqual(filterConfig.length);
  });

  test("renders selected filters", () => {
    appWrapper.find(FilterOptions).find('input').at(0).simulate('change')
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: TYPES.UPDATE_FILTERS,
        payload: filterConfig[0].items[0]
      }
    ]);
  });
});
