/*eslint-disable */
import { useCallback, useEffect, useState } from "react";

const UseScroll = (props) => {
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {}, []);

  const infiniteScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 30
    ) {
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
