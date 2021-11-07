import React from "react";
<<<<<<< HEAD

function GoogleLoginBtn() {

  const onClickGoogle = async () => {
    // 서버가 google oauth 처리하도록
    // 구글에게 요청을 보내는 앤드포인트로 클라이언트에서 이동을 한다
    console.log('서버로 요청이 감')
    // 새로운 페이지로 이동
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  }

  return (
    <div>
      <button id="oAuthBtn" onClick={onClickGoogle}>
        <div id="comment">구글 로그인</div>
      </button>
    </div>
=======
import { OauthBtn,Img } from "../kakao/KakaoStyle";
import googleLogo from "../../imges/google-logo.png"
function GoogleLogin() {

  return (
    <>
      <OauthBtn>
        <Img src={googleLogo}/>
      </OauthBtn>
    </>
>>>>>>> signin
  );
}
export default GoogleLogin;
