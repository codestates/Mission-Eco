<<<<<<< HEAD
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import CheckPassword from "../../components/MyInfo/CheckPassword/CheckPassword";
// import MypageEdit from "../../components/MyInfo/MypageEdit/MypageEdit";
import axios from "axios";
// import { getChallengeInfo, getPostcardInfo } from "../../Redux/actions";
=======
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
>>>>>>> 042baf5bc35a6177d1a39888fccc24666786ec5e
import {
  H1,
  Btn,
  MypageContainer,
  Container,
  Title,
  ListContainer,
  ListItem,
} from "./MypageStyle";
import LikeList from "../../components/MyInfo/MypageLIke/LikeList/LikeList";
import MyLogList from "../../components/MyInfo/MypageLIke/MyLogList/MyLogList";
// import Carousel from "styled-components-carousel";
import Footer from "../../components/Footer/Footer";

const Mypage = () => {
<<<<<<< HEAD
  // ! 현진 작성 부분 =============================================================================================
  // Navbar에서 mypage탭 누르면 이동할 때 요청보내려고 Navbar에서 작성하다가 뭔가 Mypage에 작성해야하는 것 같아서 옮겨옴
  // 별도의 action없이 이 컴포넌트 렌더링되는 순간 서버에 리스트 요청 보내려면? ---> useEffect?...

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
          // setErrMsg("success request");
          // const challengeInfo = res.data;
          // const postcardInfo = res.data;
          // dispatch(getChallengeInfo(challengeInfo));
          // dispatch(getPostcardInfo(postcardInfo));
          return;
        } else if (res.status === 400) {
          // setErrMsg("Bad Request");
          return;
        }
      });
  };
=======
  // const dispatch = useDispatch();

  // const [errMsg, setErrMsg] = useState("");

  useEffect(() => {}, []);

  return (
    <MypageContainer>
      <Navbar />
      {/* mypage-top-container ( 페이지 타이틀, 마이페이지 수정버튼 ) */}
      <Container id="mypage-top-area">
        <H1>마이페이지</H1>
        <Btn type="submit">수정하기✍🏻</Btn>
      </Container>
>>>>>>> 042baf5bc35a6177d1a39888fccc24666786ec5e

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

      {/* // * ================================================================================ */}
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

      <Footer />
    </MypageContainer>
  );
};

export default Mypage;
