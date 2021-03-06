import React, { useState, useEffect } from "react";
import MyLogListItem from "../MyLogListItem/MyLogListItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUserLog } from "../../../../Redux/actions";

const MyLogList = ({ nickName }) => {
  const dispatch = useDispatch();
  const [myLogLists, setMyLogLists] = useState([]);

  useEffect(() => {
    LikeAndLogListRequest();
  }, []);

  // myLogList ๋ถ๋ฌ์ค๊ธฐ
  const LikeAndLogListRequest = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/mylist`,
        // "http://team-meetme.s3-website.ap-northeast-2.amazonaws.com/mypage/mylist/:userId",
        { withCredentials: true }
      )

      .then((res) => {
        //("login", res.data);

        if (res.status === 200) {
          const { myLogList } = res.data;
          // console.log("๐ณmyLogList๐ณ", myLogList);
          // ? ์ฌ๊ธฐ์ myLogList๋ฅผ myLogLists (useState)์ ๋ด์๋ค!
          setMyLogLists(myLogList);
        } else if (res.status === 400) {
        }
      });
  };

  // ํ์ฌ ์ ํ๋ log id๋ฅผ ๋ฐ์, ํด๋น log๋ฅผ ์๋ฒ์ ํด๋ผ์ด์ธํธ์์ ๋ชจ๋ ์ญ์ 
  const HandleDeleteLog = async (logId) => {
    // ํด๋ฆญ๋ ์์ด๋ ๊ฐ์ ๊ฐ์ง ๋ก๊ทธ๋ฅผ ํด๋ผ์์ ์ง์ฐ๊ธฐ
    const removedList = myLogLists.filter((log) => log.id !== logId);

    // ํด๋ฆญ๋ ์์ด๋ ๊ฐ์ ๊ฐ์ง ๋ก๊ทธ๋ฅผ ์๋ฒ์์ ์ง์ฐ๊ธฐ
    dispatch(deleteUserLog(logId)).then(() => setMyLogLists(removedList));
  };

  return (
    <>
      {myLogLists.map((list, idx) => {
        return (
          <MyLogListItem
            list={list}
            HandleDeleteLog={HandleDeleteLog}
            key={idx}
            nickName={nickName}
          ></MyLogListItem>
        );
      })}
    </>
  );
};

export default MyLogList;
