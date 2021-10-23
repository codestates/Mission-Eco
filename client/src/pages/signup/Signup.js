import React, { useState } from "react";
import { validEmail, validPassword } from "../../utils/validation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "../Login/LoginStyle";
import { CheckButton } from "./SignupStyle";

function Signup() {
  const history = useHistory();
  const [sinupInfo, SetSinupInfo] = useState({
    email: "",
    password: "",
    password2: "",
    nickname: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  const handelFormValue = (key) => (e) => {
    SetSinupInfo({ ...sinupInfo, [key]: e.target.value });
  };
  const checkEmail = () => {
    if (!sinupInfo.email) {
      setErrorMsg("이메일을 확인해주세요.");
    }
    if (!validEmail(sinupInfo.email)) {
      setErrorMsg("이메일 형식이 아닙니다.");
      ////유효성 검사 이메일 형식이 맞는지
    } else {
      const { email } = sinupInfo;

      axios
        .get(
          `https://localhost:4000/user/signup/validation/${email}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.message === "ok") {
            setIsEmail(true);
            setErrorMsg("사용가능한 이메일입니다. ");
          }
        });
      setErrorMsg("이미 사용중인 이메일입니다.");
    }
  };

  const checkNickname = () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
    const { nickname } = sinupInfo;
    if (nickname) {
      axios
        .post(
          `https://localhost:4000/user/signup/validation/${nickname}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log("nickname", res.data);
          if (res.data.message === "ok") {
            setIsNickname(true);
            setErrorMsg("사용가능한 닉네임입니다. ");
          }
        });
    } else {
      setErrorMsg("이미 사용중인 닉네임입니다.");
    }
  };

  const handleSignup = () => {
    const { email, password, password2, nickname } = sinupInfo;

    if (!email || !password || !password2 || !nickname) {
      setErrorMsg("모든 항목은 필수입니다.");
    } else if (!validPassword(password) || password !== password2) {
      setErrorMsg("비밀번호를 확인해주세요.");
    } else if (isNickname && isEmail) {
      axios
        .post(
          "https://localhost:4000/user/signup",
          { sinupInfo },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            setErrorMsg("회원가입완료");
            alert("회원가입완료");
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormH1>회원가입</FormH1>
            <FormLabel>이메일</FormLabel>
            <FormInput type="text" onChange={handelFormValue("email")} />
            <CheckButton onClick={checkEmail}>중복확인</CheckButton>
            <FormLabel>비밀번호</FormLabel>
            <FormInput
              className="FormInput"
              type="password"
              placeholder="비밀번호 입력"
              onChange={handelFormValue("password")}
            ></FormInput>
            <FormLabel>비밀번호확인</FormLabel>
            <FormInput
              className="FormInput"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handelFormValue("password2")}
            ></FormInput>
            <FormLabel className="FormLabel">닉네임</FormLabel>
            <FormInput
              className="FormInput"
              type="text"
              onChange={handelFormValue("nickname")}
            ></FormInput>
            <CheckButton onClick={checkNickname}>중복확인</CheckButton>

            <Text>{errorMsg}</Text>
            <FormButton onClick={handleSignup}>회원가입</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default Signup;
