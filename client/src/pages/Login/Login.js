import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserInfo, isLogin, userSignin } from "../../Redux/actions";
import axios from "axios";
import { validEmail } from "../../utils/validation";
import Kakao from "../kakao/Kakao";
import Google from "../google/Google";
import {
  Container,
  LeftTxt,
  RightTxt,
  FormWrap,
  SocialLoigin,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  //FormBtnBox,
  BtnLink,
  LinkSignUp,
  LinkFindIdPwd,
  GeneralLogin,
  Text,
  //OauthBtn,
} from "./LoginStyle";

axios.defaults.withCredentials = true;

const Login = () => {
  const login = useSelector((state) => state.infoReducer.isLogin);
  console.log("login", login);
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginInfo, SetLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  useState(() => {}, []);

  const handleInputValue = (key) => (e) => {
    SetLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    alert("핸들 성공");
    setErrMsg("ok.");

    history.push("/");
    isAuthenticated();
  };

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

  const loginRequestHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      setErrMsg("이메일과 비밀번호를 확인해주세요.");
    } else if (!validEmail(email)) {
      setErrMsg("이메일 형식이 아닙니다.");
    } else {
      dispatch(userSignin(loginInfo));
      if (isLogin) {
        handleResponseSuccess();
      } else {
        setErrMsg("이메일과 비밀번호를 확인해주세요.");
      }
    }
  };

  return (
    <Container>
      {/* <FormH1>로그인</FormH1> */}
      <LeftTxt>Hello,</LeftTxt>
      <RightTxt>We always<br/>think about<br/>our<br/>Earth</RightTxt>
      <FormWrap>
        <Icon to="/"></Icon>
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
            <BtnLink to="/"><LinkFindIdPwd>아이디 / 비밀번호 찾기</LinkFindIdPwd></BtnLink>
            <BtnLink to="/signup"><LinkSignUp>회원가입</LinkSignUp></BtnLink>
            </GeneralLogin>
            <SocialLoigin>
              <Google />
              <Kakao />
            </SocialLoigin>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
