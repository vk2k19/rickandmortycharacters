import React from "react";
import SearchReults from "@/app/components/searchResults";
import mockData from "@/app/data/mocks/characters.json";
import filterConfig from "@/app/data/filterConfig.json";
import { render, waitFor } from "@testing-library/react";
import { Providers } from "@/lib/providers";
describe("App test", () => {
  const initialState = {
    search: {
      name: '',
      filters: filterConfig,
      sortBy: {},
      results: []
    }
  };

  test("renders without crashing", () => {
    const appWrapper = render(
      <Providers preloadedState={initialState}>
        <SearchReults />
      </Providers>
    );
    expect(appWrapper).not.toBe(null);
  });

  test("does not render results", () => {
    const appWrapper = render(
      <Providers preloadedState={initialState}>
        <SearchReults />
      </Providers>
    );
    expect(appWrapper.queryByTestId('search-results')).toBeNull();
  });

  test("renders provided results", () => {
    const appWrapper = render(
      <Providers preloadedState={{ search: { ...initialState.search, results: mockData }}}>
        <SearchReults />
      </Providers>
    );

    waitFor(() => expect(appWrapper.getByTestId('search-results').length).toEqual(1));
  });

  test("Results renders all cards", () => {
    const appWrapper = render(
      <Providers preloadedState={{ search: { ...initialState.search, results: mockData, filters: [] }}}>
        <SearchReults />
      </Providers>
    );

    waitFor(() =>expect(appWrapper.getByTestId('card').length).toEqual(6));
  });

  test("Results renders cards", () => {
    const appWrapper = render(
      <Providers preloadedState={{ search: { ...initialState.search, results: mockData }}}>
        <SearchReults />
      </Providers>
    );

    waitFor(() => expect(appWrapper.getByTestId('card').length).toEqual(1));
  });

  test("renders filtered result based on name", () => {
    const appWrapper = render(
      <Providers preloadedState={{ search: {...initialState.search, results: mockData, name: 'test'} }}>
        <SearchReults />
      </Providers>
    );

    expect(appWrapper.queryByTestId('card')).toBeNull();
  });
});
