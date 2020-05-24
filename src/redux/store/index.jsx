import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Reducer from "../reducer";

const getStoreWith = (initialData = {}) => {
  return createStore(Reducer, initialData, applyMiddleware(Thunk));
};

export default getStoreWith;
