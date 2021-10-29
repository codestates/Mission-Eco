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
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  //FormBtnBox,
  BtnLink,
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
      <FormWrap>
        <Icon to="/">Mission Eco</Icon>
        <FormContent>
          <Form onSubmit={(e) => e.preventDefault()}>
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
