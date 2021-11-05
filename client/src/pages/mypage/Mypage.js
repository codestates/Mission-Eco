import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
// import CheckPassword from "../../components/MyInfo/CheckPassword/CheckPassword";
// import MypageEdit from "../../components/MyInfo/MypageEdit/MypageEdit";
import axios from "axios";
//import { getChallengeInfo, getPostcardInfo } from "../../Redux/actions";
import {
  H1,
  Btn,
  MypageContainer,
  Container,
  Title,
  ListContainer,
  ListItem,
} from "./MypageStyle";

const Mypage = () => {
  // ! 현진 작성 부분 =============================================================================================
  // Navbar에서 mypage탭 누르면 이동할 때 요청보내려고 Navbar에서 작성하다가 뭔가 Mypage에 작성해야하는 것 같아서 옮겨옴
  // 별도의 action없이 이 컴포넌트 렌더링되는 순간 서버에 리스트 요청 보내려면? ---> useEffect?...

  // const dispatch = useDispatch();

  const [errMsg, setErrMsg] = useState("");

  // mypage탭 누르면 -> mypage로 이동과 동시에 리스트 요청 보내기 위해 만든 함수.
  const listRequest = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/mylist`,
        // "http://team-meetme.s3-website.ap-northeast-2.amazonaws.com/mypage/mylist/:userId",
        { withCredentials: true }
      )
      .then((res) => {
        // 리스트 받아옴
        console.log("login", res.data);
        if (res.status === 200) {
          setErrMsg("success request");
          // const challengeInfo = res.data;
          // const postcardInfo = res.data;
          // dispatch(getChallengeInfo(challengeInfo));
          // dispatch(getPostcardInfo(postcardInfo));
        } else if (res.status === 400) {
          setErrMsg("Bad Request");
        }
      });
  };

  useEffect(() => {
    listRequest();
  }, []);

  // ? 받아온 리스트에서 userId에 해당하는 아이템들만 필터링해주는 함수

  // !==============================================================================================================

  // const renderItems = items.return(
  return (
    <div>
      <Navbar />
      <MypageContainer>
        <Container>
          {/* 자꾸 Navbar에 가려서 안보여서 밑으로 내려오게 하려고 3개 만든거임 원래 1개여야 함. */}
          <H1>마이페이지</H1>
          <Btn type="submit">수정하기✍🏻</Btn>
        </Container>
        {/* 어떻게 해야 Navbar랑 Container 위치가 안 겹치게 만들 수 있는가... */}

        <Container>
          {/* filter된 리스트들은 */}
          <Title>닉네임: 환경요정</Title>
          <Title>에코뱃지: 7개</Title>
        </Container>
        <Container>
          나의 에코뱃지
          <ListContainer>
            ul
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
          </ListContainer>
        </Container>
        <Container>
          나의 포스팅
          <ListContainer>
            ul
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
          </ListContainer>
        </Container>
        <Container>
          나의 좋아요
          <ListContainer>
            ul
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
          </ListContainer>
        </Container>
      </MypageContainer>
      {/* <CheckPassword /> */}
      {/* <MypageEdit /> */}
    </div>
  );
};

export default Mypage;
