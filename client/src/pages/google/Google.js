import React from "react";
import { OauthBtn,Img } from "../kakao/KakaoStyle";
import googleLogo from "../../imges/google-logo.png"
function GoogleLogin() {

  return (
    <>
      <OauthBtn>
        <Img src={googleLogo}/>
      </OauthBtn>
    </>
  );
}
export default GoogleLogin;
