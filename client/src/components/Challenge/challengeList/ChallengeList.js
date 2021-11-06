import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeList } from "../../../Redux/actions";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";
import LoadingIndicator from "../../Loading/LoadingIndicator";

import {
  ChallengeContiner,
  ChallengeH1,
  ChallengeWrapper,
  ChallengeSubbar,
  ChallengeSelect,
  Button,
} from "./ChallengeListStyle";

const ChallengeList = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [listItems, setListItems] = useState([]);
  const [all, setAll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const challengeList = useSelector((state) => state.infoReducer.challengeList);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getChallengeList()).then(() => setIsLoading(false));

    //setImgData(...challengeList);
  }, [dispatch]);

  useEffect(() => {}, [challengeList]);

  const handleRequsetLevelList = (e) => {
    const level = e.target.value;
    console.log(level);
    if (Number(level) === 0) {
      setAll(true);
    } else {
      const itemLevel = challengeList.filter(
        (el) => el.level === Number(level)
      );
      setListItems(itemLevel);
      setAll(false);
    }
  };

  return (
    <ChallengeContiner id="services">
      <ChallengeH1>Mission List</ChallengeH1>
      <ChallengeSubbar>
        <ChallengeSelect>
          <Button value="0" onClick={(e) => handleRequsetLevelList(e)}>
            All
          </Button>
        </ChallengeSelect>
        <ChallengeSelect>
          <Button value="1" onClick={(e) => handleRequsetLevelList(e)}>
            Level 1
          </Button>
        </ChallengeSelect>
        <ChallengeSelect>
          <Button value="2" onClick={(e) => handleRequsetLevelList(e)}>
            Level 2
          </Button>
        </ChallengeSelect>
        <ChallengeSelect>
          <Button value="3" onClick={(e) => handleRequsetLevelList(e)}>
            Level 3
          </Button>
        </ChallengeSelect>
        <ChallengeSelect>
          <Button>미션후기작성</Button>
        </ChallengeSelect>
      </ChallengeSubbar>
      <ChallengeWrapper>
        {challengeList && all
          ? challengeList.map((list, idx) => {
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  userId={userInfo.id}
                  isLogin={isLogin}
                />
              );
            })
          : listItems.map((list, idx) => {
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  userId={userInfo.id}
                  isLogin={isLogin}
                />
              );
            })}
      </ChallengeWrapper>
    </ChallengeContiner>
  );
};

export default ChallengeList;
