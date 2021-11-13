import React, { useEffect } from "react";
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
import CheckPassword from "./components/MyInfo/CheckPassword/CheckPassword";
import MypageEdit from "./components/MyInfo/MypageEdit/MypageEdit";
import Sidebar from "./components/Sidebar/Sidebar";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminWrapper from "./components/Admin/AdminEdit/AdminWrapper/AdminWrapper";
import { useDispatch, useSelector } from "react-redux";
import { isToggle, authSuccess } from "../src/Redux/actions";
import ChallengeEdit from "./components/Admin/AdminEdit/ChallengeEdit/ChallengeEdit";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const Toggle = useSelector((state) => state.infoReducer.isToggle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSuccess());

    return () => dispatch(authSuccess());
  }, [dispatch]);

  const togglehandler = () => {
    dispatch(isToggle(!Toggle));
  };

  return (
    <Router>
      <ScrollTop />
      <Sidebar togglehandler={togglehandler} />
      <Navbar togglehandler={togglehandler} />
      <Switch>
        <>
          <Route exact path="/" component={Main} />
          <Route exact path="/oauth" component={Auth} />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/challenge">
            <Challenge />
          </Route>
          <Route exact path="/log">
            <ChallengeLog />
          </Route>
          <Route exact path="/upload">
            <ChallengeUpload />
          </Route>
          <Route exact path="/admin-login">
            <AdminLogin />
          </Route>
          <Route exact path="/admin/log">
            <AdminWrapper />
          </Route>
          <Route exact path="/admin/challenge">
            <ChallengeEdit />
          </Route>
          <Route exact path="/checkpassword">
            <CheckPassword />
          </Route>
          <Route exact path="/mypage-edit">
            <MypageEdit />
          </Route>
        </>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
