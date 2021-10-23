import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <div>Hello :)</div>
    </Router>
  );
}

export default App;
