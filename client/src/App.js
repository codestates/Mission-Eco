import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/signup/Signup";
import Login from "./pages/Login/Login";
import Mypage from "./pages/mypage/Mypage";
import Navbar from "./components/Navbar/Navbar";
import Challenge from "./pages/challenge/Challenge";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup">
          <Navbar />
          <Signup />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/Challenge">
          <Navbar />
          <Challenge />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
