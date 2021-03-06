import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userSignin, authSuccess } from "../../Redux/actions";
import axios from "axios";
import { validEmail } from "../../utils/validation";
import kakaoLogo from "../../imges/kakao-logo.png";
import googleLogo from "../../imges/google-logo.png";
import logo from "../../imges/logo.png";

import {
  Container,
  LeftTxt,
  RightTxt,
  FormWrap,
  SocialLoigin,
  Logo,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  BtnLink,
  LinkSignUp,
  LinkFindIdPwd,
  GeneralLogin,
  Text,
  OauthBtn,
  Icon,
  MissionLogo,
} from "./LoginStyle";
//
axios.defaults.withCredentials = true;

function Login() {
  //const login = useSelector((state) => state.infoReducer.isLogin);

  const dispatch = useDispatch();
  const history = useHistory();

  const [loginInfo, SetLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  //useState(() => {}, []);

  const handleInputValue = (key) => (e) => {
    SetLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    setErrMsg("ok.");

    history.push("/");
    isAuthenticated();
  };

  const isAuthenticated = () => {
    dispatch(authSuccess());
  };

  const loginRequestHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      setErrMsg("이메일과 비밀번호를 확인해주세요.");
    } else if (!validEmail(email)) {
      setErrMsg("이메일 형식이 아닙니다.");
    } else {
      dispatch(userSignin(loginInfo)).then((res) => {
        // console.log(res);
        if (res) {
          handleResponseSuccess();
        } else {
          setErrMsg("이메일 또는 비밀번호를 확인해주세요.");
        }
      });
    }
  };

  const kakaoLogin = async () => {
    //ㄷㅏ른 url로 이동
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/kakao`;
  };

  const googleLogin = async () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  return (
    <Container>
      {/* <FormH1>로그인</FormH1> */}
      <LeftTxt>Hello,</LeftTxt>
      <RightTxt>
        We always
        <br />
        think about
        <br />
        our
        <br />
        Earth
      </RightTxt>
      <FormWrap>
        <Icon to="/">
          <MissionLogo imgUrl={logo} alt="mission eco logo" />
        </Icon>
        <FormContent>
          <Form onSubmit={(e) => e.preventDefault()}>
            <GeneralLogin>
              <div>
                <FormLabel htmlFor="for">이메일</FormLabel>
                <FormInput type="email" onChange={handleInputValue("email")} />
              </div>
              <div>
                <FormLabel htmlFor="for">비밀번호</FormLabel>
                <FormInput
                  type="password"
                  onChange={handleInputValue("password")}
                />
              </div>
              <Text>{errMsg}</Text>
              <FormButton type="submit" onClick={loginRequestHandler}>
                로그인
              </FormButton>
              <BtnLink to="/">
                <LinkFindIdPwd>아이디 / 비밀번호 찾기</LinkFindIdPwd>
              </BtnLink>
              <BtnLink to="/signup">
                <LinkSignUp>회원가입</LinkSignUp>
              </BtnLink>
            </GeneralLogin>
            <SocialLoigin>
              <OauthBtn onClick={kakaoLogin}>
                <Logo src={kakaoLogo} />
              </OauthBtn>
              <OauthBtn onClick={googleLogin}>
                <Logo src={googleLogo} />
              </OauthBtn>
            </SocialLoigin>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default Login;
