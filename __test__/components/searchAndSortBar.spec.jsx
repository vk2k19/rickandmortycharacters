import React from "react";
import SearchAndSortBar from "@/app/components/SearchAndSortBar";
import sortBy from "@/app/data/sortConfig.json";
import { fireEvent, render } from "@testing-library/react";
import { Providers } from "@/lib/providers";

describe("App test", () => {
  let appWrapper;
  const initialState = {
    search: {
      name: "",
      filters: [],
      sortBy: sortBy,
      results: [],
    },
  };
  let store;

  beforeEach(() => {
    appWrapper = render(
      <Providers preloadedState={initialState}>
        <SearchAndSortBar />
      </Providers>,
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
    expect(appWrapper.getByTestId("select-dropdown").length).toEqual(2);
  });

  test("renders search form", () => {
    expect(appWrapper.getByTestId("search-form").length).not.toEqual(0);
  });

  test("renders sorting options", () => {
    expect(appWrapper.getByTestId("select-dropdown").length).toEqual(2);
  });

  test("triggers change in dropdown selection action", () => {
    fireEvent.change(appWrapper.getByTestId("select-dropdown"), {
      target: {
        value: "Descending",
      },
    });
    expect(appWrapper.getAllByTestId("select-dropdown").at(0).value).toEqual(
      "Descending",
    );
  });

  test("renders change in search and submit triggers update Search string action", () => {
    appWrapper = render(
      <Providers preloadedState={{ search: { ...initialState.search } }}>
        <SearchAndSortBar />
      </Providers>,
    );
    fireEvent.change(appWrapper.getAllByTestId("search-query").at(0), {
      target: { value: "test" },
    });
    fireEvent.submit(appWrapper.getAllByRole("button").at(0));
    expect(appWrapper.getAllByTestId("search-query").at(0).value).toEqual("");
  });
});
