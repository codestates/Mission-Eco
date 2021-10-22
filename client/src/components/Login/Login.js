import React, { useState } from "react";
import axios from "axios";
import { validEmail } from "../../utils/validation";
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
  Text,
  OauthBtn,
} from "./LoginStyle";

axios.defaults.withCredentials = true;

const Login = () => {
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

  const loginRequestHandler = () => {
    const { email, password } = loginInfo;
    console.log(loginInfo);

    if (!email || !password) {
      setErrMsg("이메일과 비밀번호를 확인해주세요.");
    } else if (!validEmail(email)) {
      setErrMsg("이메일 형식이 아닙니다.");
    } else {
      setErrMsg("ok.");
      //axios
      /*
      axios
        .post(
          "https://localhost:4000/user/login`",
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          //console.log("login", res.data.message);
          if (res.status === 200) {
            const accessToken = res.data.data
            dispatch(authSuccess());
            isAuthenticated(state);
          } else {
            setErrorMsg("이메일과 비밀번호를 확인해주세요.");
          }
        });*/
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
            <FormBtnBox>
              <OauthBtn>구글로그인</OauthBtn>
              <OauthBtn>카카오로그인</OauthBtn>
            </FormBtnBox>
            <FormButton type="submit">회원가입</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
