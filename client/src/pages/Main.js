import React, { useEffect } from "react";
import Challenge from "./challenge/Challenge";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
function Main() {
  useEffect(() => {
    const authorizationCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);
  const getAccessToken = (authorizationCode) => {
    /**axios요청
    axios
        .post(
          "https://localhost:4000/user/kakao-signin",
          { authorizationCode },
          { withCredentials: true }
        )
        .then((res) => {
          //console.log("klogin", res.data.message);
          if (res.status === 200) {
            handleResponseSuccess();
          } else {
            setErrMsg("이메일과 비밀번호를 확인해주세요.");
          }
        }); 
    * 
     
     */
  };

  return (
    <div>
      <Navbar />
      <Challenge />
    </div>
  );
}

export default Main;
