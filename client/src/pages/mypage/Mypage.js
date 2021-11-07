import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  H1,
  H2,
  H3,
  MypageBtn,
  BtnLink,
  LinkCheckPassword,
  MypageContainer,
  Container,
  Title,
  ListContainer,
  ListItem,
} from "./MypageStyle";
import LikeList from "../../components/MyInfo/MypageLIke/LikeList/LikeList";
import MyLogList from "../../components/MyInfo/MypageLIke/MyLogList/MyLogList";
// import blob1 from "../../imges/blob1.svg";
import Footer from "../../components/Footer/Footer";

const Mypage = () => {
  useEffect(() => {}, []);

  return (
    <>
      <MypageContainer>
        <H1>My Page</H1>
        {/* mypage-top-container ( 페이지 타이틀, 마이페이지 수정버튼 ) */}
        <MypageBtn>
          <BtnLink to="/checkpassword">
            <LinkCheckPassword>&nbsp; 수정하기 ✍🏻</LinkCheckPassword>
          </BtnLink>
        </MypageBtn>

        {/* mypage-1st-container (유저 닉네임, 이 유저가 획득한 뱃지 갯수) */}
        <Container>
          <Title>닉네임: 환경요정</Title>
          <Title>에코뱃지: 7개</Title>
        </Container>

        {/* mypage-2nd-container ( 이 유저가 획득한 뱃지 이미지들 ) */}
        <Container>
          <H2>나의 에코뱃지</H2>
          <ListContainer>
            <ListItem>뱃지 리스트 들어올 예정</ListItem>
          </ListContainer>
        </Container>

        {/* // * ================================================================================ */}
        {/* res에서 challengeLikeList만 솎아서 */}
        <Container>
          <H2>내가 Like한 챌린지 List</H2>
          <ListContainer>
            <LikeList />
          </ListContainer>
        </Container>

        <Container>
          <H2>내가 작성한 챌린지Log List</H2>
          <ListContainer>
            <MyLogList />
          </ListContainer>
        </Container>
        <Footer />
      </MypageContainer>
    </>
  );
};

export default Mypage;
