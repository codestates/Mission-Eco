import React, { useEffect } from "react";
import Challenge from "./challenge/Challenge";
import Navbar from "../components/Navbar/Navbar";
import { isLogin } from "../../src/Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MypageEdit from "../components/MyInfo/MypageEdit/MypageEdit";
import Mypage from "./mypage/Mypage";

function Main() {
  const state = useSelector((state) => state.infoReducer);
  console.log(state.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const authorizationCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);
  const getAccessToken = (authorizationCode) => {
    //axios요청
    axios
      .post(
        "https://localhost:4000/user/kakao-signin",
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
    </div>
  );
}

export default Main;
