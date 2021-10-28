// Mypage에서 '수정하기'버튼 클릭눌러서 들어온 페이지 - 기능 구현 여기에
import React, { useState } from "react";
import axios from "axios";
import {
  CheckPasswordContainer,
  Title,
  FormContainer,
  InputPassword,
  ErrMsg,
  SubmitBtn,
} from "./CheckPasswordStyle";

axios.defaults.withCredentials = true;

export default function CheckPassword() {
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleInputValue = (key) => (e) => {
    setPassword({ password, [key]: e.target.value });
  };

  const loginRequestHandler = () => {
    if (!password) {
      setErrMsg("비밀번호가 일치하지 않습니다.");
    } else {
      /*axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/login`,
          { password },
          { withCredentials: true }
        )
        .then((res) => {
          //console.log("login", res.data.message);
          if (res.data.message === "ok") {
            dispatch(authSuccess());
            isAuthenticated(state);
          } else {
            setErrorMsg("비밀번호를 확인해주세요.");
          }
        });*/
    }
  };

  return (
    <>
      <CheckPasswordContainer>
        <FormContainer>
          <Title>비밀번호 확인</Title>
          <InputPassword
            type="password"
            onChange={handleInputValue("password")}
          />
          <ErrMsg>{errMsg}</ErrMsg>
          <SubmitBtn type="submit" onClick={loginRequestHandler}>
            비밀번호 확인
          </SubmitBtn>
        </FormContainer>
      </CheckPasswordContainer>
    </>
  );
}
