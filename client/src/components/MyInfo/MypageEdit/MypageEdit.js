import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, deleteUserInfo } from "../../../Redux/actions";
import { validPassword } from "../../../utils/validation";
import axios from "axios";
import {
  Container,
  TitleH1,
  Wrapper,
  TitleH3,
  Input,
  Span,
  Btn,
} from "./MypageEditStyle";

axios.defaults.withCredentials = true;

const MypageEdit = () => {
  const state = useSelector((state) => state.infoReducer);
  const dispatch = useDispatch();
  const history = useHistory();

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
  const [isPw, setIsPw] = useState(false);

  useEffect(() => {}, [state.userInfo]);

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
          if (res.status === 204) {
            setNick(true);
            setErrMsg("사용가능한 닉네임입니다. ");
          }
        });
    }
    setErrMsg("이미 사용중인 닉네임입니다.");
  };

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
          "https://localhost:4000/mypage/userinfo/password", // 여기에 /mypage/userinfo/password 엔드포인트 쓰는거? 일케 쓰는 거 맞음?,
          { userId: state.userInfo.id, newPassword: password1 },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 204) {
            setIsPw(true);
            setPwErrMsg("비밀번호가 변경완료");
            // setPw(true);
            // 로 해야하나?
          }
        })
        .catch((err) => console.log(err));
    }
    setPwErrMsg("비밀번호가 변경실패");
  };
  //
  // ** handler 회원탈퇴 ---> 모달창 레이아웃부터 잡기
  // 회원탈퇴 버튼을 누르면 "확인 모달창"이 뜬다.
  // 모달창에서 "예" 버튼을 누르면 -> DB에서 내 정보가 삭제된다.
  // 함수 만들어서 버튼 누르면 axios로 요청 보내기 코드 작성. delete메소드 --> 요청부분까지만 일단 작성해두기
  // 응답--> 성공시 mypage-userInfo를 null로 바꿔야 한다. (리덕스) --> 같이

  // const [showModal, setShowModal] = useState(false);

  const userDeleteRequestHandler = () => {
    axios
      .delete(`https://localhost:4000/mypage/userinfo`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 204) {
          dispatch(deleteUserInfo(null));
          dispatch(isLogin(!isLogin));
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
            onChange={handlePwValue("password1")} // handleInputValue에 ("password") 하면 패스워드만 골라서 쓸 수 있음?
          />
          {/* <Span>{pwErrMsg}</Span> */}
          <Span>비밀번호 확인</Span>
          <Input
            type="password"
            placeholder="새 비밀번호를 재입력하세요."
            onChange={handlePwValue("password2")}
          />
          <Span>{pwErrMsg}</Span>
          <Btn type="submit" onClick={changePwRequestHandler}>
            비밀번호 변경
          </Btn>

          {/* 회원탈퇴 */}
        </Wrapper>
        {/* <Link to="../../Modal/Modal"> */}
        {/* 왜 이동한 페이지에서 Modal컴포넌트 내용이 안뜨지? */}
        {/* 회원 탈퇴 */}
        {/* onClick={changeNickRequestHandler} */}
        {/* </Link> */}
        {/* <Modal /> */}

        {/* <Btn onClick={() => {setShowModal(true);}}> */}
        {/* 회원탈퇴 */}
        {/* </Btn> */}
        {/* {showModal === true ? <Modal /> : null} */}
        {/* 회원탈퇴 누르면 모달창 뜨고 -> 모달컴포넌트에서 네 누르면 먹히는 것 까진 있는데, 
        모달 컴포넌트에서 아니오 누르면 모달창이 닫혀야함.. */}

        <Btn onClick={userDeleteRequestHandler}>회원탈퇴</Btn>
      </Container>
    </>
  );
};

export default MypageEdit;
