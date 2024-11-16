import React from "react";
import { Providers } from "@/lib/providers";
import SelectedFilters from "@/app/components/SelectedFilters";
import filterConfig from "@/app/data/filterConfig.json";
import { fireEvent, render } from "@testing-library/react";

describe("App test", () => {
  let appWrapper;
  const initialState = {
    search: {
      name: "",
      filters: filterConfig,
      sortBy: {},
      results: [],
    },
  };
  let store;

  beforeEach(() => {
    appWrapper = render(
      <Providers preloadedState={initialState}>
        <SelectedFilters />
      </Providers>,
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders selected filters", () => {
    expect(appWrapper.getAllByTestId("tag").length).toEqual(2);
  });

  test("renders selected filters and searched name", () => {
    appWrapper = render(
      <Providers
        preloadedState={{ search: { ...initialState.search, name: "test" } }}
      >
        <SelectedFilters />
      </Providers>,
    );

    expect(appWrapper.getAllByTestId("tag").length).toEqual(5);
  });

  test("renders selected filters", () => {
    fireEvent.click(appWrapper.getAllByRole("button").at(0));
    expect(appWrapper.getAllByTestId("tag").length).toEqual(1);
  });

  test("renders selected filters and searched name", () => {
    appWrapper = render(
      <Providers
        preloadedState={{ search: { ...initialState.search, name: "test" } }}
      >
        <SelectedFilters />
      </Providers>,
    );
    fireEvent.click(appWrapper.getAllByRole("button").at(2));
    expect(appWrapper.getAllByTestId("tag").length).toEqual(4);
  });
});
