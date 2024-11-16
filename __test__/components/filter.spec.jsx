import React from "react";
import Filter from "@/app/components/filter";
import filterConfig from "@/app/data/filterConfig.json";
import { Providers } from "@/lib/providers";
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

  beforeEach(() => {
    appWrapper = render(
      <Providers preloadedState={initialState}>
        <Filter />
      </Providers>,
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("renders various filter options", () => {
    expect(appWrapper.getAllByTestId("filter-options").length).toEqual(
      filterConfig.length,
    );
  });

  test("renders selected filters", () => {
    fireEvent.change(appWrapper.getAllByRole("checkbox").at(0), {
      target: {
        value: "Descending",
      },
    });
    expect(appWrapper.getAllByTestId("filter-options").length).toEqual(
      filterConfig.length,
    );
  });
});
