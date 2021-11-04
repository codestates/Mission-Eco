// ChallengeLogList 참고.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import LikeListItem from "../LikeListItem/LikeListItem";
// import Slider from "react-styled-carousel";

const LikeList = () => {
  const [challengeLists, setChallengeLists] = useState([]);
  // const [myLogLists, setMyLogLists] = useState([]);

  useEffect(() => {
    LikeAndLogListRequest();
  }, []);

  // mypage탭 누르면 -> mypage로 이동과 동시에 리스트 요청 보내기 위해 만든 함수.
  const LikeAndLogListRequest = async () => {
    await axios
      .get(
        `https://localhost:4000/mypage/mylist`,
        // "http://team-meetme.s3-website.ap-northeast-2.amazonaws.com/mypage/mylist/:userId",
        { withCredentials: true }
      )
      .then((res) => {
        console.log("login", res.data);

        if (res.status === 200) {
          // const { myLogList, challengeList } = res.data;
          const { challengeList } = res.data;
          console.log("✨ challengeList ✨", challengeList);
          // ! 여기서 ChallengeList useState에 담았다!
          setChallengeLists(challengeList);
        } else if (res.status === 400) {
        }
      });
  };

  // myLogList, challengeList 각각 잘 받아오고 있고 각각의 state로 갱신해주었는데
  // 왜 map한 부분에서는 myLogList.map 부분이랑, challengeLists 부분이랑 같은 객체가 들어오나? (res전체)

  return (
    <>
      {/* // ! ChallengeList보여주기 위한 맵 */}
      {challengeLists &&
        challengeLists.map((list, idx) => {
          // ! LikeListItem으로 가기
          return <LikeListItem list={list} key={idx}></LikeListItem>;
        })}
    </>
  );
};

export default LikeList;
