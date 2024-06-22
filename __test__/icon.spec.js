import React from "react";
import Icon, { metadata } from "@/app/icon/page";
import { Providers } from "@/lib/providers";
import { render } from "@testing-library/react";

describe("Icon test", () => {
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
        <Icon />
      </Providers>
    );
  });

  afterEach(() => {
    appWrapper.unmount();
  });

  test("renders without crashing", () => {
    expect(appWrapper).not.toBe(null);
  });

  test("should have meta for index page", () => {
    expect(metadata).toStrictEqual({
      description: "List and filter your favorite rick and morty characters",
      title: "Rick and Morty characters",
    });
  });
});
