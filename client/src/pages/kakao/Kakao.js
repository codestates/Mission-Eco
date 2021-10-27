import React from "react";
import kakao from "../../imges/kakao.png";
import { OauthBtn, Img } from "./KakaoStyle";

function kakaoLogin() {
  const KAKAO_LOGIN = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_API_URL}&response_type=code`;
  const oauthLogin = () => {
    window.location.href = KAKAO_LOGIN;
  };
  return (
    <>
      <OauthBtn onClick={oauthLogin}>
        <Img src={kakao} />
      </OauthBtn>
    </>
  );
}

export default kakaoLogin;
