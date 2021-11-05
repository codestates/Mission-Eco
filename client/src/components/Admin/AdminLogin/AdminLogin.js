import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//import { userSignin, authSuccess } from "../../Redux/actions";
import axios from "axios";
import { validEmail } from "../../utils/validation";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  GeneralLogin,
  Text,
} from "./LoginStyle";

axios.defaults.withCredentials = true;

function Login() {
  const login = useSelector((state) => state.infoReducer.isLogin);
  console.log("aaaaaaaadfsfsd", login);
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
    alert("로그인 성공");
    setErrMsg("ok.");

    history.push("/admin"); //관리자 페이지로 이동
    //isAuthenticated();
  };

  const loginRequestHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      setErrMsg("이메일과 비밀번호를 확인해주세요.");
    } else if (!validEmail(email)) {
      setErrMsg("이메일 형식이 아닙니다.");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/admin/signin`,
          { email, password },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          if (res.status === 401) {
            setErrMsg(res.message);
          } else if (res.status === 204) {
            handleResponseSuccess();
          }
        });
    }
  };

  return (
    <Container>
      {/* <FormH1>로그인</FormH1> */}
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
                관리자 로그인
              </FormButton>
            </GeneralLogin>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default Login;
