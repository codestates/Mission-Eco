import React, { useState } from "react";
import { validEmail, validPassword } from "../../utils/validation";
function Signup() {
  const [sinupInfo, SetSinupInfo] = useState({
    email: "",
    password: "",
    password2: "",
    nickname: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  const handelInputValue = (key) => (e) => {
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
      /*
      axios
        .post(
          `${process.env.REACT_APP_END_POINT}user/signup/validEmail`,
          { email },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.message === "ok") {
            
          }
        });
    }*/
    }
    setIsEmail(true);
    setErrorMsg("이메일 중복");
  };
  const checkNickname = () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
    const { nickname } = sinupInfo;
    if (nickname) {
      /*
        axios
          .post(
            `${process.env.REACT_APP_END_POINT}user/signup/checkNickname`,

            { nickname },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            //console.log("nickname", res.data);
            if (res.data.message === "ok") {
              setIsNickname(true);
            }
          });*/
      setIsNickname(true);
      setErrorMsg("사용가능한 닉네임입니다. ");
    } else {
      setErrorMsg("이미 사용중인 닉네임입니다.");
    }
  };

  const handleSignup = () => {
    console.log(sinupInfo, isEmail, isNickname);
    const { email, password, password2, nickname } = sinupInfo;
    if (!email || !password || !password2 || !nickname) {
      setErrorMsg("모든 항목은 필수입니다.");
    } else if (!validPassword(password) || password !== password2) {
      setErrorMsg("비밀번호를 확인해주세요.");
    } else if (isNickname && isEmail) {
      //회원가입 axios요청
      setErrorMsg("ok.");
    }
  };

  return (
    <div className="Container">
      <form className="Form" onSubmit={(e) => e.preventDefault()}>
        <h1 className="FormH1">
          <div className="Contents">
            <label className="Label">이메일</label>
            <input
              className="Input"
              type="text"
              onChange={handelInputValue("email")}
            ></input>
            <button className="CheckButton" onClick={checkEmail}>
              중복확인
            </button>
            <label className="Label">비밀번호</label>
            <input
              className="Input"
              type="password"
              placeholder="비밀번호 입력"
              onChange={handelInputValue("password")}
            ></input>
            <label className="Label">비밀번호확인</label>
            <input
              className="Input"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handelInputValue("password2")}
            ></input>
            <label className="Label">닉네임</label>
            <input
              className="Input"
              type="text"
              onChange={handelInputValue("nickname")}
            ></input>
            <button className="CheckButton" onClick={checkNickname}>
              중복확인
            </button>
          </div>
          <small>{errorMsg}</small>
          <button className="FormButton" onClick={handleSignup}>
            회원가입
          </button>
        </h1>
      </form>
    </div>
  );
}

export default Signup;
