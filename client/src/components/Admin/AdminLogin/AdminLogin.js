import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminSignin } from "../../../Redux/actions";
import axios from "axios";
import { validEmail } from "../../../utils/validation";
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
} from "./AdminLoginStyle";
import Modal from "../../Modal/Modal";

axios.defaults.withCredentials = true;

function Login() {
  //인풋창에 로그인 값 변경이 있으면 이 값이 계속 찍힘 확인 바람
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginInfo, SetLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  //useState(() => {}, []);

  const handleInputValue = (key) => (e) => {
    SetLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const closeModalHandler = () => {
    setOpenModal(!openModal);
  };

  const handleResponseSuccess = () => {
    setErrMsg("ok.");
    alert("로그인 성공");

    history.push("/admin/log"); //관리자 페이지로 이동
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
      dispatch(adminSignin(loginInfo)).then((res) => {
        if (!res) {
          setOpenModal(!openModal);
        } else {
          handleResponseSuccess();
        }
      });
    }
  };

  return (
    <Container>
      {openModal ? (
        <Modal
          msg="관리자 권한이 필요한 페이지입니다."
          msg2="user 로그인"
          closeModalHandler={closeModalHandler}
          link="/login"
        />
      ) : (
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form onSubmit={(e) => e.preventDefault()}>
              <GeneralLogin>
                <div>
                  <FormLabel htmlFor="for">이메일</FormLabel>
                  <FormInput
                    type="email"
                    onChange={handleInputValue("email")}
                  />
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
      )}
    </Container>
  );
}

export default Login;
