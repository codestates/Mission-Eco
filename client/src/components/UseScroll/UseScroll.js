import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UseScroll = (props) => {
  const challengeList = useSelector((state) => state.infoReducer.challengeList);
  const [missionList, setMissionList] = useState(0);
  const [result, setResult] = useState(challengeList.slice(0, 6));

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setMissionList(missionList + 6);
      setResult(
        result.concat(challengeList.slice(missionList + 6, missionList + 12))
      );
    }
  }, [missionList, result]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, [infiniteScroll]);
  console.log(missionList);
  return [missionList];
};

export default UseScroll;
