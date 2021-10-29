import React, { useEffect } from "react";
import Challenge from "./challenge/Challenge";
import ChallengeLog from "./challengeLog/ChallengeLog";
import Navbar from "../components/Navbar/Navbar";
import { isLogin, getUserInfo } from "../../src/Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Main() {
  const state = useSelector((state) => state.infoReducer);
  console.log(state.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    isAuthenticated();
    const authorizationCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  const isAuthenticated = () => {
    //유저 정보 찾아줌
    axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/auth`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getUserInfo(res.data.userInfo));
        console.log(res.data.userInfo);
      })
      .catch((err) => console.log(err));
  };

  const getAccessToken = (authorizationCode) => {
    //axios요청
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/kakao-signin`,
        { authorizationCode },
        { withCredentials: true }
      )
      .then((res) => {
        //console.log("klogin", res.data.message);
        if (res.status === 204) {
          console.log("kakao ok");

          dispatch(isLogin(true));
          history.push("/");
          //handleResponseSuccess();
        } else {
          console.log("kakao fail");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <Challenge />
      <ChallengeLog />
    </div>
  );
}

export default Main;
