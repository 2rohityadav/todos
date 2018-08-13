import React from "react";
import ReactDOM from "react-dom";

//// redux imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

//? redux-devtool-extension
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import { todoReducer } from "./redux-store/Store";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

//! store
const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
