import React, { useState, useEffect } from "react";
import MyLogListItem from "../MyLogListItem/MyLogListItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUserLog } from "../../../../Redux/actions";

const MyLogList = () => {
  const dispatch = useDispatch();
  const [myLogLists, setMyLogLists] = useState([]);

  useEffect(() => {
    LikeAndLogListRequest();
  }, []);

  // myLogList 불러오기
  const LikeAndLogListRequest = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/mylist`,
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

  // 현재 선택된 log id를 받아, 해당 log를 서버와 클라이언트에서 모두 삭제
  const HandleDeleteLog = async (logId) => {
    // 클릭된 아이디 값을 가진 로그를 클라에서 지우기
    const removedList = myLogLists.filter((log) => log.id !== logId);

    // 클릭된 아이디 값을 가진 로그를 서버에서 지우기
    dispatch(deleteUserLog(logId)).then(() => setMyLogLists(removedList));
  };

  return (
    <>
      {/* //? ChallengeLog를 보여주기 위한 맵을 돌린다. */}
      {myLogLists.map((list, idx) => {
        // ? <myLogListItem디렉토리 안에 LikeListItem처럼 컴포넌트 만들어서 여기서 쓰3></myLogListItem디렉토리>
        return (
          <MyLogListItem
            list={list}
            HandleDeleteLog={HandleDeleteLog}
            key={idx}
          ></MyLogListItem>
        );
      })}
    </>
  );
};

export default MyLogList;
