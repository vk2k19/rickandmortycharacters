import React from "react";
import { Providers } from "@/lib/providers";
import Footer from "@/app/components/Footer";
import { render } from "@testing-library/react";

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
        <Footer />
      </Providers>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });
});
