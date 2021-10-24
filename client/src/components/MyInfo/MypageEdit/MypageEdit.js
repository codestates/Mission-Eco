import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { isLogin, getUserInfo, deleteUserInfo } from "../../Redux/actions";
import axios from 'axios';
import "./styles.css";
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
    const dispatch = useDispatch();
    const history = useHistory();
    // input text창에 변경할 닉네임 입력 후 닉네임 변경하기 버튼 누르면 서버로 변경 요청 보내기
    // 해당 닉네임이 DB에 존재하는지 검사 -> 이미 DB에 존재하는 닉네임이라면 errmsg Text
    // 닉네임 변경 성공시 변경 성공. (팝업이나 모달로 알림은 일어나지 않음)
    }
    const [nick, setNick] = useState({
      nickname: "",
    });
    const [errMsg, setErrMsg] = useState("");

    const handleInputValue = (key) => (e) => {
      setNick({ ...nick, [key]: e.target.value });
    }
    const changeNickRequestHandler = () => {
      if (/*nickname이 DB에 존재하면*/) {
        // setErrMsg("이미 존재하는 닉네임입니다."); 에 해당하는 코드
      } else {
        axios
        .post(
          // "https://localhost:4000/mypageEdit...?여기도 localhost4000 뒤에 정확히 무슨 주소 들어가야 하는지를 모르겠음",
          { nickname },
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
      const handleResponseSuccess = () => { // 성공했을 때 응답에 실어보낼
        /* 여기에 뭐 적어야 하는 지도 모르겠음 */
        // dispatch(changeUserNick(어쩌구)); --> Redux/actions/index.js에 있음
        // ! 여기까지 작성하다 잠
      }

    }

    return (
      <>
        <Container>
          <TitleH1>마이페이지</TitleH1>

          <Wrapper>
            <TitleH3>닉네임 변경하기</TitleH3>
            {/* <div className="title">닉네임</div> */}
            <Span>새 닉네임</Span>
            <Input
              type="text"
              placeholder="새 닉네임을 입력하세요."
              onChange={handleInputValue("nickname")} // index.js에 nickname으로 들어가 있어서 이렇게적었는데 위의 state명 nick을 적어야 하나?
            ></Input>
            <Span nickname={nickname}></Span>
              {/* <Btn onClick={changeInfoHandler}>닉네임 변경</Btn> */}
            <Btn type="submit" onClick={changeNickRequestHandler}> 
              닉네임 변경
            </Btn>
          </Wrapper>
// ! --- 여기까지 작성

          <Wrapper>
            <TitleH3>비밀번호 변경하기</TitleH3>
            <Span>비밀번호</Span>
            <Input type="text" />
            <Span>{/* 에러 메시지-비밀번호 형식이 아닙니다. */}</Span>
            <Span>비밀번호 확인</Span>
            <Input type="text" />
            <Span>{/* 에러 메시지-비밀번호가 일치하지 않습니다.*/}</Span>
            <Btn type="submit" onClick={}>
              비밀번호 변경
            </Btn>
          </Wrapper>

          <Btn type="submit" onClick={}>
            회원 탈퇴
          </Btn>
        </Container>
      </>
    );

export default MypageEdit;
