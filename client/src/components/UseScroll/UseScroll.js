import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UseScroll = (props) => {
  //const challengeList = useSelector((state) => state.infoReducer.challengeList);
  //const [missionList, setMissionList] = useState(0);
  //const [result, setResult] = useState(challengeList.slice(0, 6));
  const [isFetch, setIsFetch] = useState(false);

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

    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 10
    ) {
      console.log("callback", document.documentElement.scrollTop);
      // setMissionList(missionList + 6);
      //setResult(
      //   result.concat(challengeList.slice(missionList + 6, missionList + 12))
      // );
      setIsFetch(true);
      return;
    }
  }, [isFetch]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  //console.log(missionList);
  return [isFetch, setIsFetch];
};

export default UseScroll;
