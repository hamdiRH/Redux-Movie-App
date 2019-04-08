import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import store from "./store/index";

render(
  <Provider store={store}>
    <App stars="3" />
  </Provider>,
  document.getElementById("root")
);
