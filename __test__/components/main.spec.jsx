import React from "react";
import App from "@/app/components/main";
import { Providers } from "@/lib/providers";
import { render, waitFor } from "@testing-library/react";

describe("App test", () => {
  let appWrapper;
  const initialState = {
    search: {
      name: '',
      filters: [],
      sortBy: {},
      results: []
    }
  };

  beforeEach(() => {
    appWrapper = render(
      <Providers preloadedState={initialState}>
        <App />
      </Providers>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders filters screen", () => {
    waitFor(() => expect(appWrapper.getByTestId('filters').length).toEqual(1));
  });
  test("renders results", () => {
    waitFor(() =>expect(appWrapper.getByTestId('search-results').length).toEqual(1));
  });
  test("renders selected filters", () => {
    waitFor(() => expect(appWrapper.getByTestId('selected-filters').length).toEqual(1));
  });
  test("renders search ad sorting", () => {
    waitFor(() => expect(appWrapper.getByTestId('searchbar').length).toEqual(1));
  });
});
