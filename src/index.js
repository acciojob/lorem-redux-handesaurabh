import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import store from "./store/configureStore.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
