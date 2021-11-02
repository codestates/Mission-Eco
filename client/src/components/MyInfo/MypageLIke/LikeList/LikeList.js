// ChallengeLogList 참고.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikeListItem from "../LikeListItem/LikeListItem";
import { ServicesCard } from "../LikeList/LikeListStyle";
import axios from "axios";

const LikeList = () => {
  const [challengeLists, setChallengeLists] = useState([]);
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
          const { myLogList, challengeList } = res.data;
          setChallengeLists(challengeList); // ! 여기서 ChallengeList useState에 담았다!
          // ? 여기서 setPost~~로 ChallengeLog를 보여주기 위한 useState 해준다.
        } else if (res.status === 400) {
        }
      });
  };

  return (
    <>
      {/* //! ChallengeList보여주기 위한 맵 */}
      {challengeLists &&
        challengeLists.map((list, idx) => {
          // setChallengeList(dispatch(getChallengeInfo(challengeInfo))) 해서 challengeList가 받아온 데이터(필터링 되서 온 응답) res.data로 갱신된 상태 아님? 그래서 challengeList에 맵돌린건데 왜 function이 아니래 ㅡㅡ ㅡㅡ
          return (
            // ? LikeListItem으로 가기
            <LikeListItem list={list} key={idx}>
              {/* css에 👇🏻 이런 식으로 넣기 */}
            </LikeListItem>
          );
        })}

      {/* //? ChallengeLog를 보여주기 위한 맵을 돌린다. */}
      {/* <myLogListItem디렉토리 안에 LikeListItem처럼 컴포넌트 만들어서 여기서 쓰3></myLogListItem디렉토리> */}
    </>
  );
};

export default LikeList;
