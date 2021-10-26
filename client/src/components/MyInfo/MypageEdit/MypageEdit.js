import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { isLogin, getUserInfo, deleteUserInfo } from "../../Redux/actions";
import { validPassword } from "../../../utils/validation";
import axios from "axios";
import {
  Container,
  TitleH1,
  Wrapper,
  TitleH3,
  Input,
  Span,
  P,
  Btn,
} from "./MypageEditStyle";

axios.defaults.withCredentials = true;

const MypageEdit = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // input text창에 변경할 닉네임 입력 후 닉네임 변경하기 버튼 누르면 서버로 변경 요청 보내기
  // 해당 닉네임이 DB에 존재하는지 검사 -> 이미 DB에 존재하는 닉네임이라면 errmsg Text
  // 닉네임 변경 성공시 변경 성공. (팝업이나 모달로 알림은 일어나지 않음)

  // * 에러메시지 state
  const [errMsg, setErrMsg] = useState("");
  const [pwErrMsg, setPwErrMsg] = useState("");

  // * 닉네임 state
  const [nick, setNick] = useState({
    nickname: "",
  });

  // * 패스워드 state
  const [pwInfo, setPwInfo] = useState({
    password1: "",
    password2: "",
  });
  // const [isPw, setIsPw] = useState(false);

  // * handle Input Value 함수 - Nick
  const handleNickValue = (key) => (e) => {
    setNick({ ...nick, [key]: e.target.value });
  };

  // * handle Input Value함수 - PwInfo
  const handlePwValue = (key) => (e) => {
    setPwInfo({ ...pwInfo, [key]: e.target.value });
  };

  // ** handler - 닉네임
  const { nickname } = nick;
  const changeNickRequestHandler = () => {
    if (!nickname) {
      setErrMsg("닉네임을 입력하세요.");
    } else {
      axios
        .get(
          `https://localhost:4000/user/validation/nickname/${nickname}`,

          {
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log("nickname", res.data);
          if (res.data.message === "ok") {
            setNick(true);
            setErrMsg("사용가능한 닉네임입니다. ");
          }
          setErrMsg("이미 사용중인 닉네임입니다.");
        });
    }
  };
  /* else {
      axios
        .get(
          "https://localhost:4000/mypageEdit...?여기도 localhost4000 뒤에 정확히 무슨 주소 들어가야 하는지를 모르겠음",
          "/user/validation/:nickname"
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            handleResponseSuccess();
          } else {
            setErrMsg("닉네임을 확인해주세요.");
          }
        });
      // 이렇게 작성해보려고 했는데, DB에 이미 존재하는 닉네임인지 확인하는 함수 작성을 못하겠음
    } 
    const handleResponseSuccess = () => {}
      // 성공했을 때 응답에 실어보낼*
      /* 여기에 뭐 적어야 하는 지도 모르겠음 */
  // dispatch(changeUserNick(어쩌구)); --> Redux/actions/index.js에 있음

  // ** handler-패스워드변경
  const { password1, password2 } = pwInfo;

  const changePwRequestHandler = () => {
    if (!password1 || !password2) {
      setPwErrMsg("모든 항목은 필수입니다.");
    } else if (!validPassword(password1)) {
      setPwErrMsg("비밀번호를 확인해주세요.");
    } else if (password1 !== password2) {
      setPwErrMsg("비밀번호가 일치하지 않습니다.");
    }
    // } else if (isPw) {
    //   axios
    //     .patch(
    //       `https://localhost:4000/user/validation/password/${password}`, // 여기에 /mypage/userinfo/password 엔드포인트 쓰는거? 일케 쓰는 거 맞음?,
    //       { pwInfo },
    //       { withCredentials: true }
    //     )
    //     .then((res) => {
    //       console.log(res.status);
    //       if (res.status === 201) {
    //         setIsPw(true)
    //         // setPw(true);
    //         // 로 해야하나?
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // }
  };
  // ! 에러는 안뜨는데 왜 메인페이지에 MypageEdit부분이 안뜨지?
  //
  // ** handler 회원탈퇴 ---> 모달창 레이아웃부터 잡기
  // 회원탈퇴 버튼을 누르면 "확인 모달창"이 뜬다.
  // 모달창에서 "예" 버튼을 누르면 -> DB에서 내 정보가 삭제된다.

  return (
    <>
      <Container>
        <TitleH1>마이페이지</TitleH1>

        {/* 닉네임 변경 */}
        <Wrapper>
          <TitleH3>닉네임 변경하기</TitleH3>
          {/* <div className="title">닉네임</div> */}
          <Span>새 닉네임</Span>
          <Input
            type="text"
            placeholder="새 닉네임을 입력하세요."
            onChange={handleNickValue("nickname")} // index.js에 nickname으로 들어가 있어서 이렇게적었는데 위의 state명 nick을 적어야 하나?
          ></Input>
          {/* <Btn onClick={changeInfoHandler}>닉네임 변경</Btn> */}
          <Btn type="submit" onClick={changeNickRequestHandler}>
            닉네임 변경
          </Btn>
          <Span>{errMsg}</Span>
        </Wrapper>

        {/* 패스워드 변경 */}
        <Wrapper>
          <TitleH3>비밀번호 변경하기</TitleH3>
          <Span>비밀번호</Span>
          <Input
            type="password"
            placeholder="새 비밀번호를 입력하세요."
            onChange={handleNickValue("password")} // handleInputValue에 ("password") 하면 패스워드만 골라서 쓸 수 있음?
          />
          {/* <Span>{pwErrMsg}</Span> */}
          <Span>비밀번호 확인</Span>
          <Input
            type="password"
            placeholder="새 비밀번호를 재입력하세요."
            onChange={handlePwValue("password")}
          />
          <Span>{pwErrMsg}</Span>
          <Btn type="submit" onClick={changePwRequestHandler}>
            비밀번호 변경
          </Btn>

          {/* 회원탈퇴 */}
        </Wrapper>
        <Btn type="submit" onClick={changeNickRequestHandler}>
          회원 탈퇴
        </Btn>
      </Container>
    </>
  );
};

export default MypageEdit;
