import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer/reducer";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";

export const store = createStore(
  combineReducers({
    products: reducer,
  }),
  applyMiddleware(thunk),
);
