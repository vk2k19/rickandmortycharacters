import React from "react";
import { mount } from "enzyme";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SearchReults from "../../src/components/searchResults";
import mockData from "../../src/data/mocks/characters.json";
import filterConfig from "../../src/data/filterConfig.json";
import Results from "../../src/components/searchResults/results";
import Card from '../../src/components/core/card';

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
        <SearchReults />
      </Provider>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("does not render results", () => {
    expect(appWrapper.find(Results).length).toEqual(0);
  });

  test("renders provided results", () => {
    store = mockStore({ search: { ...initialState.search, results: mockData }});
    appWrapper = mount(
      <Provider store={store}>
        <SearchReults />
      </Provider>
    );

    expect(appWrapper.find(Results).length).toEqual(1);
  });

  test("Results renders all cards", () => {
    store = mockStore({ search: { ...initialState.search, results: mockData, filters: [] }});
    appWrapper = mount(
      <Provider store={store}>
        <Results />
      </Provider>
    );

    expect(appWrapper.find(Card).length).toEqual(6);
  });

  test("Results renders cards", () => {
    store = mockStore({ search: { ...initialState.search, results: mockData }});
    appWrapper = mount(
      <Provider store={store}>
        <Results />
      </Provider>
    );

    expect(appWrapper.find(Card).length).toEqual(1);
  });

  test("renders filtered result based on name", () => {
    store = mockStore({ search: { ...initialState.search, results: mockData, name: 'test' }});
    appWrapper = mount(
      <Provider store={store}>
        <Results />
      </Provider>
    );

    expect(appWrapper.find(Card).length).toEqual(0);
  });
});
