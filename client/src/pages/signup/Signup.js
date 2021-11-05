import React, { useState } from "react";
import { validEmail, validPassword } from "../../utils/validation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignupModal from "./SignupModal";
import { CheckButton } from "./SignupStyle";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  Icon,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "../Login/LoginStyle";


function Signup() {
  const history = useHistory();
  const [signupInfo, SetSignupInfo] = useState({
    email: "",
    password: "",
    password2: "",
    nickname: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isSignUpOk, setSignUpOk ] = useState(false);

  const handelFormValue = (key) => (e) => {
    SetSignupInfo({ ...signupInfo, [key]: e.target.value });
  };
  const checkEmail = () => {
    const { email } = signupInfo;
    if (!email) {
      setErrorMsg("이메일을 확인해주세요.");
    }
    if (!validEmail(email)) {
      setErrorMsg("이메일 형식이 아닙니다.");
      ////유효성 검사 이메일 형식이 맞는지
    } else {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/user/validation/email/${email}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 204) {
            setIsEmail(true);
            setErrorMsg("사용가능한 이메일입니다. ");
          }
        });
      setErrorMsg("이미 사용중인 이메일입니다.");
    }
  };

  const checkNickname = () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
    const { nickname } = signupInfo;
    console.log(nickname, "회원가입");
    if (!nickname) {
      setErrorMsg("닉네임을 입력하세요.");
    } else {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/user/validation/nickname/${nickname}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log("nickname", res.data);
          if (res.status === 204) {
            setIsNickname(true);
            setErrorMsg("사용가능한 닉네임입니다. ");
          }
        });
    }
    setErrorMsg("사용불가 닉네임입니다.");
  };

  const handleSignup = () => {
    const { email, password, password2, nickname } = signupInfo;

    if (!email || !password || !password2 || !nickname) {
      setErrorMsg("모든 항목은 필수입니다.");
    } else if (!validPassword(password) || password !== password2) {
      setErrorMsg("비밀번호를 확인해주세요.");
    } else if (isNickname && isEmail) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          { signupInfo },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 201) {
            setSignUpOk(true);
            setIsOpen(true);
          } else {
            setSignUpOk(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  
  // 모달 x버튼이 클릭되면 창이 닫힌다
  const openModalHandler = () => {
    setIsOpen(false); // 회원가입 성공 메시지 창이 X버튼으로 닫히면 
    history.push('/'); // 랜딩페이지로 감
  };

  console.log('is open이 상태가 다 변하는지???', isOpen)

  return (
    <Container>
      <FormWrap>
        <Icon to="/"></Icon>
        <FormContent>
          <Form onSubmit={(e) => e.preventDefault()}>
            {/* <FormH1>회원가입</FormH1> */}
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
            <FormLabel>비밀번호 재확인</FormLabel>
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
      { isSignUpOk && isOpen ? 
       <SignupModal openModalHandler={openModalHandler}/> : null}
    </Container>

  );
}

export default Signup;
