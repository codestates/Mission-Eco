import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeList } from "../../../Redux/actions";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";
import LoadingIndicator from "../../Loading/LoadingIndicator";

import {
  ServicesContiner,
  ServicesTxt,
  ServicesH1,
  ServicesWrapper,
  Subbar,
  SelectLeft,
  SelectRight,
  Button,
} from "./ChallengeListStyle";

const ChallengeList = ({ img }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  console.log(userInfo);
  const [listItems, setListItems] = useState([]);
  const [render, setRender] = useState(false);
  const [all, setAll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const challengeList = useSelector((state) => state.infoReducer.challengeList);

  useEffect(() => {
    dispatch(getChallengeList());
  }, [dispatch]);

  useEffect(() => {}, [challengeList]);

  const handleRequsetLevelList = (e) => {
    // ? handleRequesetLevelList 함수 =======================================================
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
    <ServicesContiner id="services">
      <ServicesH1>Mission List</ServicesH1>
      <ServicesTxt>우리 지구를 위한 미션을 확인해 보세요.</ServicesTxt>
      <Subbar>
        <SelectLeft>
          <Button value="0" onClick={(e) => handleRequsetLevelList(e)}>
            All
          </Button>
          <Button value="1" onClick={(e) => handleRequsetLevelList(e)}>
            Level 1
          </Button>
          <Button value="2" onClick={(e) => handleRequsetLevelList(e)}>
            Level 2
          </Button>
          <Button value="3" onClick={(e) => handleRequsetLevelList(e)}>
            Level 3
          </Button>
        </SelectLeft>
        <SelectRight>
          <Button>미션 하러Go</Button>
        </SelectRight>
      </Subbar>
      <ServicesWrapper>
        {challengeList && all
          ? challengeList.map((list, idx) => {
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  userId={userInfo.id}
                  isLogin={isLogin}
                  render={() => setRender(!render)}
                  img={img}
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
                  render={() => setRender(!render)}
                  img={img}
                />
              );
            })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeList;
