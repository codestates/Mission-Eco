import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import CheckPassword from "../../components/MyInfo/CheckPassword/CheckPassword";
// import MypageEdit from "../../components/MyInfo/MypageEdit/MypageEdit";
import {
  H1,
  Btn,
  Container,
  Title,
  ListContainer,
  ListItem,
} from "./MypageStyle";

const Mypage = () => {
  //함수 작성

  return (
    <div>
      <Navbar />
      <Container>
        {/* 자꾸 Navbar에 가려서 안보여서 밑으로 내려오게 하려고 3개 만든거임 원래 1개여야 함. */}
        <H1>마이페이지</H1>
        <H1>마이페이지</H1>
        <H1>마이페이지</H1>
        <Btn type="submit">수정하기✍🏻</Btn>
      </Container>
      {/* 어떻게 해야 Navbar랑 Container 위치가 안 겹치게 만들 수 있는가... */}
      <Container>
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
      {/* <CheckPassword /> */}
      {/* <MypageEdit /> */}
    </div>
  );
};

export default Mypage;
