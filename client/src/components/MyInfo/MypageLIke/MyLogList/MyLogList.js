import React, { useState, useEffect } from "react";
import MyLogListItem from "../MyLogListItem/MyLogListItem";
import axios from "axios";

const MyLogList = () => {
  const [myLogLists, setMyLogLists] = useState([]);

  useEffect(() => {
    LikeAndLogListRequest();
  }, []);

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
          const { myLogList } = res.data;
          console.log("🌳myLogList🌳", myLogList);
          // ? 여기서 myLogList를 myLogLists (useState)에 담았다!
          setMyLogLists(myLogList);
        } else if (res.status === 400) {
        }
      });
  };

  return (
    <>
      {/* //? ChallengeLog를 보여주기 위한 맵을 돌린다. */}
      {myLogLists.map((list, idx) => {
        // ? <myLogListItem디렉토리 안에 LikeListItem처럼 컴포넌트 만들어서 여기서 쓰3></myLogListItem디렉토리>
        return <MyLogListItem list={list} key={idx}></MyLogListItem>;
      })}
    </>
  );
};

export default MyLogList;
