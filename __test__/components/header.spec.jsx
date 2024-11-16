import React from "react";
import Header from "@/app/components/Header";
import { render } from "@testing-library/react";
import { Providers } from "@/lib/providers";
describe("App test", () => {
  let appWrapper;
  const initialState = {
    search: {
      name: "",
      filters: [],
      sortBy: {},
      results: [],
    },
  };
  let store;

  beforeEach(() => {
    appWrapper = render(
      <Providers preloadedState={initialState}>
        <Header />
      </Providers>,
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });
});
