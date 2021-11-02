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
// import CheckPassword from "../../components/MyInfo/CheckPassword/CheckPassword";
// import MypageEdit from "../../components/MyInfo/MypageEdit/MypageEdit";
import axios from "axios";
// import { getChallengeInfo, getPostcardInfo } from "../../Redux/actions";
import ChallengeLogItem from "../../components/ChallengeLog/ChallengeLogItem/ChallengeLogItem";
import LikeList from "../../components/MyInfo/MypageLIke/LikeList/LikeList";
import MyLogListItem from "../../components/MyInfo/MypageLIke/MyLogListItem/MyLogListItem";

const Mypage = () => {
  // const dispatch = useDispatch();

  // const [errMsg, setErrMsg] = useState("");
  // // ! dispatch(getChallengeInfo(challengeInfo))로 받아온 애들 담아놓으려고 만든 state --> 이렇게 해야되는 건지 아닌지 모르겠는데 일단 해봄
  // const [challengeLists, setChallengeLists] = useState([]);
  // // ! 얘는 마찬가지로 dispatch(getPostcardInfo(postcardInfo))로 받아온 애들 담아놓으려고 만든 state임
  // const [postcardList, setPostcardList] = useState([]);

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
          내가 좋아한 챌린지 List
          <ListContainer>
            <LikeList />
          </ListContainer>
        </Container>

        {/* res 중에서 challengeList만 솎아서 */}
        {/* // ! ChallengeList(props) -->매핑패줘서 --> (props받아서 개별로 사용중)ChallengeListItem 참고 */}
        <Container>
          나의 ChallengeLog List
          <ListContainer>
            <LikeList />
          </ListContainer>
        </Container>
      </MypageContainer>
    </div>
  );
};

export default Mypage;
