import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch } from "react-redux";
import axios from 'axios';

const clientId = "856802198136-ctdj36d3fkmmo8o2ud1tdtbs01r8debs.apps.googleusercontent.com";

function GoogleLoginBtn({handleResponseSuccess}) {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res);
        const token_id = res.tokenId;
        const email = res.profileObj.email;
        const username = res.profileObj.givenName;

        console.log('구글 로그인 - token_id: ' ,token_id);
        console.log('구글 로그인 - email: ' ,email);
        console.log('구글 로그인 - username: ', username)

        // 구글 로그인 사용자가
        // 첫 방문이라면 DB에 새로운 유저로 저장
        // 첫 방문이 아니라면 구글 사용자의 정보를 불러온다.
        axios.post(
          'https://localhost:4000/user/google-signin',
          {
            email,
            nickname: username,
          },
          {
            headers: {
              'Content-Type' : 'application/json',
              authorization: token_id
            }
          }
        )
        .then(res => {
          // 상태코드가 200이면
          // login 상태를 true로 만들고, 메인페이지로 이동하도록 함, 유저의 정보를 받아옴
          handleResponseSuccess();
          return console.log('구글 로그인 서버의 응답------->',res.status)
        })
        .catch(err => console.log('googleLogin 컴포넌트 에러', err));

        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GoogleLoginBtn;
