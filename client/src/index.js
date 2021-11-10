import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store/store";
//import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
