/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, deleteUserInfo } from "../../../Redux/actions";
import { validPassword } from "../../../utils/validation";
import axios from "axios";
import {
  MypageEditContainer,
  MypageEditWrap,
  TitleH1,
  Wrapper,
  TitleH3,
  Input,
  Span,
  Btn,
} from "./MypageEditStyle";

axios.defaults.withCredentials = true;

const MypageEdit = () => {
  // * Accept Current Change
  const state = useSelector((state) => state.infoReducer.userInfo);
  console.log(state);
  // *
  // *Accept Incoming Change
  // const isLogin = useSelector((state) => state.infoReducer.isLogin);
  // const state = useSelector((state) => state.infoReducer.userInfo);
  // console.log(isLogin, "edit");
  // *
  const dispatch = useDispatch();
  const history = useHistory();

  // input text창에 변경할 닉네임 입력 후 닉네임 변경하기 버튼 누르면 서버로 변경 요청 보내기
  // 해당 닉네임이 DB에 존재하는지 검사 -> 이미 DB에 존재하는 닉네임이라면 errmsg Text
  // 닉네임 변경 성공시 변경 성공. (팝업이나 모달로 알림은 일어나지 않음)

  // * 에러메시지 state
  const [errMsg, setErrMsg] = useState("");
  const [pwErrMsg, setPwErrMsg] = useState("");

  // // * 닉네임 state
  // const [nick, setNick] = useState({
  //   nickname: "",
  // });
  // ! 닉네임 state 수정
  const [nickInfo, setNickInfo] = useState({
    userId: state.id,
    newNickname: "",
  });
  // !

  // * 패스워드 state
  const [pwInfo, setPwInfo] = useState({
    password1: "",
    password2: "",
  });

  useEffect(() => {}, [state.userInfo]);

  // // !* handle Input Value 함수 - Nick
  // const handleNickValue = (key) => (e) => {
  //   setNick({ ...nick, [key]: e.target.value });
  // };
  // ! handle Input Nick 수정
  const handleNickValue = (key) => (e) => {
    setNickInfo({ ...nickInfo, [key]: e.target.value });
  };
  // !

  // * handle Input Value함수 - PwInfo
  const handlePwValue = (key) => (e) => {
    setPwInfo({ ...pwInfo, [key]: e.target.value });
  };

  // ** handler - 닉네임 중복확인
  // const { nickname } = nick;
  // ! nick --> nickInfo 수정
  // const { nickname } = nickInfo;
  const { userId, newNickname } = nickInfo;
  // !
  const checkNickRequestHandler = () => {
    console.log(newNickname);

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/validation/nickname/${newNickname}`,

        {
          withCredentials: true,
        }
      )
      .then((res) => {
        //console.log("nickname", res.data);
        if (res.status === 204) {
          // setNick(true);
          // // !setNick-->setNickInfo 수정
          // setNickInfo(true);
          // // !
          setErrMsg("사용 가능한 닉네임입니다.");
        }
      })
      .catch((err) => setErrMsg("이미 사용중인 닉네임입니다."));
    // catch로 처리해보기
    // setErrMsg("이미 사용중인 닉네임입니다.");
  };

  // ! handler - 닉네임 변경 (패스워드 변경 함수 참고)
  // 성공 === 204
  const changeNickRequestHandler = () => {
    // const { userId, newNickname } = nickInfo;
    console.log(userId, newNickname);
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypage/userinfo/nickname`,
        // { userId: userInfo.id, newNickname: userInfo.newNickname },
        { userId, newNickname },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.status);
        if (res.status === 204) {
          setErrMsg("닉네임 변경완료!");
        } else {
          setErrMsg("닉네임 변경실패");
        }
      })
      .catch((err) => console.log(err));
  };
  // !

  // * handler - 비밀번호 변경 함수
  const changePwRequestHandler = () => {
    const { password1, password2 } = pwInfo;
    console.log(password1);
    console.log(password2);
    if (!password1 || !password2) {
      setPwErrMsg("모든 항목은 필수입니다.");
    } else if (!validPassword(password1)) {
      setPwErrMsg("비밀번호를 확인해주세요.");
    } else if (password1 !== password2) {
      setPwErrMsg("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/mypage/userinfo/password`,
          { userId: state.userInfo.id, newPassword: password1 },
          // ! 이 부분 참고해서 닉네임에 적용 { userId: state.userInfo.id, newNickname: ~~~ },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 204) {
            setPwErrMsg("비밀번호 변경완료");
          }
        })
        .catch((err) => console.log(err));
    }
    setPwErrMsg("비밀번호 변경실패");
  };
  //
  // ** handler 회원탈퇴 ---> 모달창 레이아웃부터 잡기
  const userDeleteRequestHandler = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/mypage/userinfo`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 204) {
          dispatch(deleteUserInfo(null));
          dispatch(isLogin(false));
          history.push("/");
          console.log("회원탈퇴 완료");
        } else {
          console.log("회원탈퇴 실패");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* // * Accept Current Change */}
      <MypageEditContainer>
        <MypageEditWrap>
          <TitleH1>마이페이지</TitleH1>

          {/* 닉네임 변경 */}
          <Wrapper>
            <TitleH3>닉네임 변경하기</TitleH3>
            <Span>새 닉네임</Span>
            <Input
              type="text"
              placeholder="새 닉네임을 입력하세요."
              onChange={handleNickValue("newNickname")} // index.js에 nickname으로 들어가 있어서 이렇게적었는데 위의 state명 nick을 적어야 하나?
            ></Input>
            <Btn type="submit" onClick={checkNickRequestHandler}>
              닉네임 중복확인
            </Btn>

            {/* //! 닉네임 변경 버튼 새로 만듬*/}
            <Btn type="submit" onClick={changeNickRequestHandler}>
              닉네임 변경
            </Btn>
            {/* //! */}

            <Span>{errMsg}</Span>
          </Wrapper>

          {/* 패스워드 변경 */}
          <Wrapper>
            <TitleH3>비밀번호 변경하기</TitleH3>
            <Span>비밀번호</Span>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={handlePwValue("password1")} // handleInputValue에 ("password") 하면 패스워드만 골라서 쓸 수 있음?
            />
            {/* <Span>{pwErrMsg}</Span> */}
            <Span>비밀번호 확인</Span>
            <Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력하세요."
              onChange={handlePwValue("password2")}
            />
            <Span>{pwErrMsg}</Span>
            <Btn type="submit" onClick={changePwRequestHandler}>
              비밀번호 변경
            </Btn>
          </Wrapper>
          <Btn onClick={userDeleteRequestHandler}>회원탈퇴</Btn>
        </MypageEditWrap>
      </MypageEditContainer>
      // * // * Accept Incoming Change
      {/* 
      <Container>
        <TitleH1>마이페이지</TitleH1>

        <Wrapper>
          <TitleH3>닉네임 변경하기</TitleH3>
          <Span>새 닉네임</Span>
          <Input
            type="text"
            placeholder="새 닉네임을 입력하세요."
            onChange={handleNickValue("newNickname")} // index.js에 nickname으로 들어가 있어서 이렇게적었는데 위의 state명 nick을 적어야 하나?
          ></Input>
          <Btn type="submit" onClick={checkNickRequestHandler}>
            닉네임 중복확인
          </Btn>

          <Btn type="submit" onClick={changeNickRequestHandler}>
            닉네임 변경
          </Btn>

          <Span>{errMsg}</Span>
        </Wrapper>

        <Wrapper>
          <TitleH3>비밀번호 변경하기</TitleH3>
          <Span>비밀번호</Span>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handlePwValue("password1")} // handleInputValue에 ("password") 하면 패스워드만 골라서 쓸 수 있음?
          />
          <Span>비밀번호 확인</Span>
          <Input
            type="password"
            placeholder="비밀번호를 한 번 더 입력하세요."
            onChange={handlePwValue("password2")}
          />
          <Span>{pwErrMsg}</Span>
          <Btn type="submit" onClick={changePwRequestHandler}>
            비밀번호 변경
          </Btn>
        </Wrapper>
        <Btn onClick={userDeleteRequestHandler}>회원탈퇴</Btn>
      </Container> */}
      //*
    </>
  );
};

export default MypageEdit;
