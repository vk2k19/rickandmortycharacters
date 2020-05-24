import React from "react";
import { mount } from "enzyme";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "../../src/components/main";
import Filter from '../../src/components/filter';
import SearchResults from '../../src/components/searchResults';
import SelectedFilters from '../../src/components/selectedFilters';
import SearchAndSortBar from '../../src/components/searchAndSortBar';

describe("App test", () => {
  let appWrapper;
  const mockStore = createMockStore([thunk]);
  const initialState = {
    search: {
      name: '',
      filters: [],
      sortBy: {},
      results: []
    }
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    appWrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders filters screen", () => {
    expect(appWrapper.find(Filter).length).toEqual(1);
  });
  test("renders results", () => {
    expect(appWrapper.find(SearchResults).length).toEqual(1);
  });
  test("renders selected filters", () => {
    expect(appWrapper.find(SelectedFilters).length).toEqual(1);
  });
  test("renders search ad sorting", () => {
    expect(appWrapper.find(SearchAndSortBar).length).toEqual(1);
  });
});
