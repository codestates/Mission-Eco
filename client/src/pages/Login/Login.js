import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { isLogin, getUserInfo } from "../../Redux/actions";
import axios from "axios";
import { validEmail } from "../../utils/validation";
import Kakao from "../kakao/Kakao";
import Google from "../google/Google";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormBtnBox,
  BtnLink,
  Text,
  OauthBtn,
} from "./LoginStyle";

axios.defaults.withCredentials = true;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //이메일, 비밀번호 입력
  //이메일형식이 맞는지 검사 -> 형식이 맞지 않다면 errmsg Text
  //2개 input이 모두 채워져 있다면 로그인 요청 보내기
  //로그인이 성공하면 메인화면으로 나가기
  //로그인이 실패하면 이메일또는 비밀번호를 확인해주세요.
  const [loginInfo, SetLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleInputValue = (key) => (e) => {
    SetLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    //isAuthenticated() auth 인증
    //로그인 상태 true
    //mainpage로 이동
    setErrMsg("ok.");
    dispatch(isLogin(true));
    history.push("/");
    isAuthenticated();
  };

  const isAuthenticated = () => {
    //유저 정보 찾아줌
    axios
      .get("https://localhost:4000/mypage/auth", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getUserInfo(res.data.userInfo));
        console.log(res.data.userInfo);
      })
      .catch((err) => console.log(err));
  };

  const loginRequestHandler = () => {
    const { email, password } = loginInfo;
    console.log(loginInfo);

    if (!email || !password) {
      setErrMsg("이메일과 비밀번호를 확인해주세요.");
    } else if (!validEmail(email)) {
      setErrMsg("이메일 형식이 아닙니다.");
    } else {
      axios
        .post(
          "https://localhost:4000/user/signin",
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          //console.log("login", res.data.message);
          if (res.status === 204) {
            handleResponseSuccess();
          } else {
            setErrMsg("이메일과 비밀번호를 확인해주세요.");
          }
        });
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">Mission Eco</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" onChange={handleInputValue("email")} />
            <FormLabel htmlFor="for">Pssword</FormLabel>
            <FormInput
              type="password"
              onChange={handleInputValue("password")}
            />
            <Text>{errMsg}</Text>
            <FormButton type="submit" onClick={loginRequestHandler}>
              입장하기!
            </FormButton>
            <Google handleResponseSuccess={handleResponseSuccess} />
            <Kakao />
            <FormButton type="submit">
              <BtnLink to="/signup">회원가입</BtnLink>
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
