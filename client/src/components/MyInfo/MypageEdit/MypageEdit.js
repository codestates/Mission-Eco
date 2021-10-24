import React, { useState } from "react";
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

function MypageEdit() {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const { email } = state.success;

  const [errorMsg, setErrorMsg] = useState("");
  const [changeNick, setchangeNick] = useState(""); //새로운 닉네임
  const [validNick, setValidNick] = useState(false);

  useEffect(() => {}, [setErrorMsg]);
  //같은 닉네임 있는지 여부 확인 요청
  const checkNicknameHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_END_POINT}user/signup/checkNickname`,
        { nickname: changeNick },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log("hy", res.data);
        if (res.data.message === "ok") {
          setErrorMsg("사용 가능한 닉네임입니다.");
          setValidNick(true);
        }
      })
      .catch((err) => {
        setErrorMsg("사용 중인 닉네임입니다. 다른 닉네임으로 변경하세요");
      });
  };

  const changeName = (e) => {
    setchangeNick(e.target.value);
  };

  const changeInfoHandler = () => {
    if (validPWD || validNick) {
      axios
        .patch(
          `${process.env.REACT_APP_END_POINT} {/* (수정하기) { user/inform8 } */}`,
          {
            email,
            nickname: changeNick,
            // password: changePWD,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res) {
            dispatch(authSuccess());
            alert("변경 완료");
            setValidPWD(false);
          }
        });
    } else {
      setErrorMsg("비밀번호를 확인해주세요.");
    }

    const changePasswordHandler = (e) => {
      setChangePWD(e.target.value);
    };
    const changeNewPWDHandler = (e) => {
      setChangeNewPWD(e.target.value);
    };
    const checkPWD = () => {
      //console.log(changePWD, changeNewPWD);

      if (changePWD !== changeNewPWD || !changePWD || !changeNewPWD) {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setValidPWD(true);
        setErrorMsg("비밀번호 확인완료 ");
      }
    };
    const changeInfoHandler = () => {
      if (validPWD || validNick) {
        axios
          .patch(
            `${process.env.REACT_APP_END_POINT}user/inform`,
            {
              email,
              nickname: changeNN,
              password: changePWD,
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res) {
              dispatch(authSuccess());
              alert("변경 완료");
              setValidPWD(false);
            }
          });
      } else {
        setErrorMsg("비밀번호를 확인해주세요.");
      }
    };

    const signoutHandler = () => {
      axios
        .delete(
          `${process.env.REACT_APP_END_POINT}user/signout`,
          { data: { email } },
          { withCredentials: true }
        )
        .then((res) => {
          //여기 부분 나중에 확인
          if (res.data.message === "success") {
            dispatch(logoutUserInfo());
            alert("회원탈퇴 완료");
            history.push("/");
          }
        });
    };

    return (
      <>
        <Container>
          <TitleH1>마이페이지</TitleH1>

          <Wrapper>
            <TitleH3>닉네임 변경하기</TitleH3>
            {/* <div className="title">닉네임</div> */}
            <Span>새 닉네임</Span>
            {/* <Input type="text" onChange={changeName}></Input> */}
            <Input
              type="text"
              placeholder="새 닉네임을 입력하세요."
              onChange={changeName}
            ></Input>
            <Span nickname={nickname}></Span>
            {/* <Btn onClick={checkNicknameHandler}>닉네임 중복 확인</Btn>
              <Btn onClick={changeInfoHandler}>닉네임 변경</Btn> */}
            <Btn type="submit" onClick={checkNicknameHandler}>
              닉네임 중복확인
            </Btn>
            <Btn type="submit" onClick={changeInfoHandler}>
              닉네임 중복확인
            </Btn>
          </Wrapper>

          <Wrapper>
            <TitleH3>비밀 변경하기</TitleH3>
            <Span>새 비밀번호</Span>
            <Input type="text" />
            <Span>{/* 에러(빨강)메시지-비밀번호 형식이 아닙니다. */}</Span>
            <Span>새 비밀번호</Span>
            <Input type="text" />
            <Span>{/* 에러(빨강)메시지-비밀번호가 일치하지 않습니다.*/}</Span>
            <Btn type="submit" onClick={changeInfoHandler}>
              비밀번호 변경
            </Btn>
          </Wrapper>

          <Btn type="submit" onClick={signoutHandler}>
            회원 탈퇴
          </Btn>
        </Container>
      </>
    );
  };
}

export default MypageEdit;
