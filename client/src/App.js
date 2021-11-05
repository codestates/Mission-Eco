import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Signup from "./pages/signup/Signup";
import Login from "./pages/Login/Login";
import Mypage from "./pages/mypage/Mypage";
import Navbar from "./components/Navbar/Navbar";
import Challenge from "./pages/challenge/Challenge";
import ChallengeLog from "./pages/challengeLog/ChallengeLog";
import ChallengeUpload from "./pages/challengeUpload/ChallengeUpload";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/oauth" component={Auth} />
        <Route exact path="/signup">
          <Navbar />
          <Signup />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/challenge">
          <Navbar />
          <Challenge />
        </Route>
        <Route exact path="/log">
          <Navbar />
          <ChallengeLog />
        </Route>
        <Route exact path="/upload">
          <Navbar />
          <ChallengeUpload />
        </Route>
        {/*<Route exact path="/admin">
          //관리자페이지
          <Navbar />
          <AdminWrapper />
          <footer/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
