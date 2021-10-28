// Mypage에서 '수정하기'버튼 클릭눌러서 들어온 페이지 - 기능 구현 여기에
import React, { useState } from "react";
import { useSelector } from "react-redux";

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
  const state = useSelector((state) => state.infoReducer);
  //const dispatch = useDispatch();
  console.log(state.userInfo);
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleInputValue = (e) => {
    setPassword(e.target.value);
  };

  const loginRequestHandler = () => {
    console.log("pwd", password);
    if (!password) {
      setErrMsg("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .post(
          "https://localhost:4000/mypage/validation-password",
          { userId: state.userInfo.id, password },
          { withCredentials: true }
        )
        .then((res) => {
          //console.log("login", res.data.message);
          if (res.status === 204) {
            setErrMsg("비밀번호 ok.");
          } else {
            setErrMsg("비밀번호를 확인해주세요.");
          }
        });
    }
  };

  return (
    <>
      <CheckPasswordContainer>
        <FormContainer>
          <Title>비밀번호 확인</Title>
          <InputPassword type="password" onChange={handleInputValue} />
          <ErrMsg>{errMsg}</ErrMsg>
          <SubmitBtn type="submit" onClick={loginRequestHandler}>
            비밀번호 확인
          </SubmitBtn>
        </FormContainer>
      </CheckPasswordContainer>
    </>
  );
}
