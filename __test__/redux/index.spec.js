import React from "react";
import { shallow, mount } from "enzyme";
import ReduxApp from "../../src/redux/index";

describe("Redux App", () => {
  test("renders", () => {
    const RootWrapper = shallow(
      <ReduxApp>
        <div className="test-child">Test child</div>
      </ReduxApp>
    );
    expect(RootWrapper).not.toBe(null);
  });
  test("renders children", () => {
    const RootWrapper = mount(
      <ReduxApp>
        <div className="test-child">Test child</div>
      </ReduxApp>
    );
    expect(RootWrapper.find(".test-child").length).toBe(1);
  });
});
