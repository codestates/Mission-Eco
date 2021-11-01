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

const Mypage = () => {
  const dispatch = useDispatch();

  const [errMsg, setErrMsg] = useState("");
  // ! dispatch(getChallengeInfo(challengeInfo))로 받아온 애들 담아놓으려고 만든 state --> 이렇게 해야되는 건지 아닌지 모르겠는데 일단 해봄
  const [challengeLists, setChallengeLists] = useState([]);
  // ! 얘는 마찬가지로 dispatch(getPostcardInfo(postcardInfo))로 받아온 애들 담아놓으려고 만든 state임
  const [postcardList, setPostcardList] = useState([]);

  useEffect(() => {
    allListRequest();
  }, []);

  // ! <> 여기부터 allListRequest 함수 ===============================================================================================================
  //  mypage탭 누르면 -> mypage로 이동과 동시에 리스트 요청 보내기 위해 만든 함수.
  const allListRequest = async () => {
    await axios
      .get(
        `https://localhost:4000/mypage/mylist`,
        // "http://team-meetme.s3-website.ap-northeast-2.amazonaws.com/mypage/mylist/:userId",
        { withCredentials: true }
      )
      .then((res) => {
        console.log("login", res.data);

        if (res.status === 200) {
          setErrMsg("success request");
          // 내가 좋아요한 챌린지, 내가 쓴 글(ChallengeLog리스트 받아옴
          const { myLogList, challengeList } = res.data;
          setChallengeLists(challengeList);
          // console.log("디스패치 결과", dispatch(getPostcardInfo(myLogList))); // >> dispatch 하는 이유는?...
          console.log("myLogList", myLogList);
        } else if (res.status === 400) {
          setErrMsg("Bad Request");
        }
      });
  }; // ! </> 여기까지 allListRequest 함수 ==============================================================================================================================
  // ? <>작성중
  // const listMap = () => {
  //   let challengeListItem = challengeList.map(res.data.challengeInfo);
  // };

  // const listMap = challengeList.map((list) => list);
  // setChallengeList(listMap);
  // ?</>작성중

  // ============= 👆🏻 여기까지 해서 res로 List를 쭉 받아왔음 (내가 작성한 게시물(ChallengeLog), 내가 좋아요 누른 챌린지) 👇🏻 =========================

  // res.~ 에서 맵돌려서 솎아내기 --> 이 함수를 useEffect에 넣어 이 페이지 렌더링 될 때 얘도 바로 렌더링 되게 만들 것임.

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
        {/* res 중에서 challengeList만 솎아서 */}
        {/* // ! ChallengeList(props) -->매핑패줘서 --> (props받아서 개별로 사용중)ChallengeListItem 참고 */}
        <Container>
          나의 ChallengeLog List
          <ListContainer>
            {/* // ? <>작성중 */} // likeList로 가기
            {challengeLists &&
              challengeLists.map((list, idx) => {
                // setChallengeList(dispatch(getChallengeInfo(challengeInfo))) 해서 challengeList가 받아온 데이터(필터링 되서 온 응답) res.data로 갱신된 상태 아님? 그래서 challengeList에 맵돌린건데 왜 function이 아니래 ㅡㅡ ㅡㅡ
                return (
                  // ? LikeListItem으로 가기
                  <ListItem list={list} key={idx}>
                    {/* css에 👇🏻 이런 식으로 넣기 */}
                    {list.name}
                  </ListItem>
                );
              })}
            {/* // ? </> */}
            <ListItem>li</ListItem>
            <ListItem>ChallengeLogItem.js</ListItem>
          </ListContainer>
        </Container>

        {/* res에서 challengeLikeList만 솎아서 */}
        <Container>
          내가 좋아한 챌린지 List
          <ListContainer>
            ul
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
            <ListItem>li</ListItem>
          </ListContainer>
        </Container>
      </MypageContainer>
    </div>
  );
};

export default Mypage;
