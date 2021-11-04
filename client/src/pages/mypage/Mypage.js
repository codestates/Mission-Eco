import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import {
  H1,
  Btn,
  MypageContainer,
  Container,
  Title,
  ListContainer,
  ListItem,
} from "./MypageStyle";
import Carousel from "styled-components-carousel";
import LikeList from "../../components/MyInfo/MypageLIke/LikeList/LikeList";
import MyLogList from "../../components/MyInfo/MypageLIke/MyLogList/MyLogList";
// import Carousel from "styled-components-carousel";
import Footer from "../../components/Footer/Footer";

const Mypage = () => {
  // const dispatch = useDispatch();

  // const [errMsg, setErrMsg] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
      <MypageContainer>
        {/* mypage-top-container ( 페이지 타이틀, 마이페이지 수정버튼 ) */}
        <Container id="mypage-top-area">
          <H1>마이페이지</H1>
          <Btn type="submit">수정하기✍🏻</Btn>
        </Container>

        {/* mypage-1st-container (유저 닉네임, 이 유저가 획득한 뱃지 갯수) */}
        <Container>
          <Title>닉네임: 환경요정</Title>
          <Title>에코뱃지: 7개</Title>
        </Container>

        {/* mypage-2nd-container ( 이 유저가 획득한 뱃지 이미지들 ) */}
        <Container>
          나의 에코뱃지
          <ListContainer>
            ul
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
          </ListContainer>
        </Container>

        {/* // ! 👇🏻 여기부터 작성 ! 👇🏻 ======================  */}

        {/* res에서 challengeLikeList만 솎아서 */}
        <Container>
          내가 Like한 챌린지 List
          <ListContainer>
            <LikeList />
          </ListContainer>
        </Container>

        <Container>
          내가 작성한 챌린지Log List
          <ListContainer>
            <MyLogList />
          </ListContainer>
        </Container>
      </MypageContainer>

      <Footer />
    </div>
  );
};

export default Mypage;
