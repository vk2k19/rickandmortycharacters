
import React from "react";
import { Provider } from "react-redux";
import storeCreator from "./store";

const ReduxApp = ({ children, search = {} }) => {
  const Store = storeCreator({
    search
  });

  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxApp;
