import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk-recursion-detect";

import "./index.css";
import App from "./App";
import AuthReducer from "./reducers/authReducers";
import * as serviceWorker from "./serviceWorker";
import { CurrentState } from "./store/auth/types";

let composeEnhancers;

if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const store = createStore<CurrentState, any, any, any>(
  AuthReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
