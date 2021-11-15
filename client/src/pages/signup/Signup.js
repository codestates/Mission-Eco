import React, { useState } from "react";
import { validEmail, validPassword } from "../../utils/validation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignupModal from "./SignupModal";
import { JoinRow } from "./SignupStyle";
import logo from "../../imges/logo.png";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Icon,
  MissionLogo,
  EmailBox,
  EamilBtn,
} from "../Login/LoginStyle";
import EmailCheckModal from "./EmailCheckModal";
//
function Signup() {
  const history = useHistory();
  const [signupInfo, SetSignupInfo] = useState({
    email: "",
    password: "",
    password2: "",
    nickname: "",
  });
  //이메일 메시지
  const [checkMsg, setCheckMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // 모달 상태 훅
  const [isOpen, setIsOpen] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [isSignUpOk, setSignUpOk] = useState(false);

  // 유저 정보 유효성 검사 상태 훅
  // 이메일
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [randomNum, setRandomNum] = useState("");
  const [vaildNum, setVaildNum] = useState("");
  const [isVaildEamil, setVaildEamil] = useState(false);
  const [isNewEamil, setIsNewEamil] = useState(false);

  // 패스워드
  const [isVaildPwd, setVaildPwd] = useState(false);
  const [isSameRePwd, setSameRePwd] = useState(false);

  // 닉네임
  const [isVaildNickname, setVaildNickname] = useState(false);
  const [isMoreThen3Length, setMoreThen3Length] = useState(false);

  // input입력창에 따른 유저정보 값 저장
  const handelFormValue = (key) => (e) => {
    SetSignupInfo({ ...signupInfo, [key]: e.target.value });

    // 각각의 input창이 아무값이 없을 때("" 일 때)
    // 새로운 요청을 위해 이전의 값을 초기화한다
    if (key === "number") {
      setVaildNum(e.target.value);
    }

    if (key === "email" && signupInfo.email.length === 0) {
      setVaildEamil(false);
      setIsNewEamil(false);
    }

    if (key === "nickname" && signupInfo.nickname.length === 0) {
      setVaildNickname(false);
      setMoreThen3Length(false);
    }

    if (key === "password" && signupInfo.password.length === 0) {
      setVaildPwd(false);
    }

    if (key === "password2" && signupInfo.password2.length === 0) {
      setSameRePwd(false);
    }
  };

  // 이메일 유효성검사와 중복검사
  const checkEmail = async () => {
    const { email } = signupInfo;
    // 새로운 요청을 위해 이전의 값을 초기화한다
    setVaildEamil(false);
    setIsNewEamil(false);

    // 1.이메일 형식이 맞는지 확인
    if (!validEmail(email)) {
      // 1-1.이메일 형식이 맞지 않는 경우
      setVaildEamil(false);
      // setErrMsg("이메일형식이 아닙니다.");
      return;
    } else {
      setVaildEamil(true);
      // 1-2.이메일 형식이 맞는 경우
      // 2. 사용가능한 이메일인지 확인
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/user/validation/email/${email}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 204) {
            // 2-1.등록된 이메일이 없는 경우
            setIsNewEamil(true);
            setErrMsg("사용가능한 이메일입니다. 이메일인증을 완료해주세요.");
            return;
          } else {
            // 2-2.이미 등록된 이메일이 있는 경우
            setIsNewEamil(false);

            return;
          }
        })
        .catch((err) => setErrMsg("이미등록된 이메일입니다."));
    }
  };

  const handleEmailBlur = async () => {
    await checkEmail();
  };

  // 닉네임 길이 확인과 중복검사
  const checkNickname = async () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
    const { nickname } = signupInfo;

    // 새로운 검사를 위해서 값을 초기화
    setVaildNickname(false);
    setMoreThen3Length(false);

    // 1. 닉네임이 3글자 이상인지 확인
    // 1-1. 닉네임이 3글자 이하이면 중복검사 요청을 보내지 않음
    if (nickname.length < 3) {
      setMoreThen3Length(false);
      return;
    } else {
      // 1-2. 입력된 값이 3글자 이상일때
      setMoreThen3Length(true);
      // 2. 등록된 이메일이 있는지 확인
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/user/validation/nickname/${nickname}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 204) {
            // 2-1. 등록된 닉네임이 없는 경우
            setVaildNickname(true);
          } else {
            // 2-2. 이미 등록된 닉네임이 있는 경우
            setVaildNickname(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleNickNameBlur = async () => {
    await checkNickname();
    return;
  };

  // 비밀번호 유효성 검사
  const checkVaildPwd = () => {
    const { password } = signupInfo;

    // 1.비밀번호 유효성 검사
    // 비밀번호 조건: 8~16자 영문 대 소문자, 숫자, 특수문자를 사용
    // 1-1. 비밀번호 조건에 부합하지 않을 때
    if (!validPassword(password)) {
      setVaildPwd(false);
      return;
    } else {
      // 1-2. 비밀번호 조건에 부합할 때
      setVaildPwd(true);
      return;
    }
  };

  const handleVaildPwdBlur = () => {
    checkVaildPwd();
    return;
  };

  // 비밀번호 일치여부 확인
  const checkMatchPwd = () => {
    const { password, password2 } = signupInfo;

    // 비밀번호 일치여부
    if (password !== password2) {
      // 2개의 비밀번호가 일치하지 않을 때
      setSameRePwd(false);
      return;
    } else {
      // 2개의 비밀번호가 일치할 때
      setSameRePwd(true);
      return;
    }
  };

  const handleMatchPwdBlur = () => {
    checkMatchPwd();
    return;
  };

  // 회워가입 버튼 클릭시 핸들링
  const handleSignup = async () => {
    // input창의 모든 조건이 충족될 때
    // 회원가입 요청을 보냄
    if (
      isVaildEamil &&
      isNewEamil &&
      isVaildPwd &&
      isSameRePwd &&
      isVaildNickname &&
      isMoreThen3Length &&
      isCheckEmail
    ) {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          { signupInfo },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            setSignUpOk(true);
            setIsOpen(true);
          } else {
            setSignUpOk(false);
          }
        })
        .catch((err) => console.log(err));
      return;
    }
  };

  // 모달 핸들러
  const openModalHandler = () => {
    setIsOpen(false); // 회원가입 성공 메시지 창이 X버튼으로 닫히면
    history.push("/"); // 랜딩페이지로 감
  };
  const closeModalHandler = () => {
    setEmailModal(false);
  };

  // 이메일 발송 핸들러
  const sendEmailHandler = async (e) => {
    const { email } = signupInfo;
    console.log("dd", email);
    e.preventDefault();
    setIsCheckEmail(false);
    //console.log(isNewEamil, isCheckEmail);

    if (isNewEamil) {
      setEmailModal(true);
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/auth/checkEmail`,
          { email },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setRandomNum(res.data.randomNum);
        });
    } else {
      return;
    }
  };

  const verifyEmail = (e) => {
    if (randomNum === vaildNum) {
      setCheckMsg("인증완료");
      setEmailModal(false);
      setIsCheckEmail(true);
      setErrMsg("사용가능한 이메일입니다.");
    } else {
      setCheckMsg("인증번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <MissionLogo imgUrl={logo} alt="mission eco logo" />
        </Icon>
        <FormContent>
          <Form onSubmit={(e) => e.preventDefault()}>
            <JoinRow>
              <EmailBox>
                <FormLabel>이메일</FormLabel>
                <EamilBtn onClick={sendEmailHandler}>이메일 인증</EamilBtn>
              </EmailBox>
              <FormInput
                type="text"
                className="FormInput"
                onBlur={(e) => handleEmailBlur(e)}
                onChange={handelFormValue("email")}
              />
              <div className={signupInfo.email.length === 0 ? "hide" : ""}>
                {isVaildEamil ? (
                  //console.log("errMsg", errMsg)
                  <div>
                    {isNewEamil ? (
                      <span className="success-msg">{errMsg}</span>
                    ) : (
                      <span className="fail-msg">{errMsg}</span>
                    )}
                  </div>
                ) : (
                  <span className="fail-msg">이메일형식이 아닙니다.</span>
                )}
              </div>
            </JoinRow>
            <JoinRow>
              <FormLabel>비밀번호</FormLabel>
              <FormInput
                className="FormInput"
                type="password"
                onBlur={() => handleVaildPwdBlur()}
                onChange={handelFormValue("password")}
              ></FormInput>
              <div className={signupInfo.password.length === 0 ? "hide" : ""}>
                <div>
                  {isVaildPwd ? (
                    <span className="success-msg">
                      사용 가능한 비밀번호입니다.
                    </span>
                  ) : (
                    <span className="fail-msg">
                      8~16자 영문 대 소문자, 숫자, 특수문자를 사용해 주세요.
                    </span>
                  )}
                </div>
              </div>
              <FormLabel>비밀번호 재입력</FormLabel>
              <FormInput
                className="FormInput"
                type="password"
                onBlur={() => handleMatchPwdBlur()}
                onChange={handelFormValue("password2")}
              ></FormInput>
              <div className={signupInfo.password2.length === 0 ? "hide" : ""}>
                <div>
                  {isSameRePwd ? (
                    <span className="success-msg hide">
                      비밀번호가 일치합니다.
                    </span>
                  ) : (
                    <span className="fail-msg hide">
                      비밀번호가 일치하지 않습니다.
                    </span>
                  )}
                </div>
              </div>
            </JoinRow>
            <JoinRow>
              <FormLabel className="FormLabel">닉네임</FormLabel>
              <FormInput
                className="FormInput"
                type="text"
                onBlur={handleNickNameBlur}
                onChange={handelFormValue("nickname")}
              ></FormInput>
              <div className={signupInfo.nickname.length === 0 ? "hide" : ""}>
                {isMoreThen3Length ? (
                  <div>
                    {isVaildNickname ? (
                      <span className="success-msg">한 닉네임입니다.</span>
                    ) : (
                      <span className="fail-msg">
                        이미 사용 중인 닉네임입니다.
                      </span>
                    )}
                  </div>
                ) : (
                  <span
                    className={
                      signupInfo.nickname.length >= 3 ? "hide " : "fail-msg"
                    }
                  >
                    닉네임은 3글자 이상이여야 합니다.
                  </span>
                )}
              </div>
            </JoinRow>
            <FormButton onClick={handleSignup}>회원가입</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
      {emailModal ? (
        <EmailCheckModal
          closeModalHandler={closeModalHandler}
          handelFormValue={handelFormValue("number")}
          verifyEmail={verifyEmail}
          checkMsg={checkMsg}
        />
      ) : null}
      {isSignUpOk && isOpen ? (
        <SignupModal openModalHandler={openModalHandler} />
      ) : null}
    </Container>
  );
}

export default Signup;
