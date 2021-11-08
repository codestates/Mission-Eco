import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeList } from "../../../Redux/actions";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";
import LoadingIndicator from "../../Loading/LoadingIndicator";

import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  Subbar,
  Select,
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
    setIsLoading(true);
    dispatch(getChallengeList()).then(() => setIsLoading(false));
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
      <Subbar>
        <Select>
          <Button value="0" onClick={(e) => handleRequsetLevelList(e)}>
            All
          </Button>
        </Select>
        <Select>
          <Button value="1" onClick={(e) => handleRequsetLevelList(e)}>
            Level 1
          </Button>
        </Select>
        <Select>
          <Button value="2" onClick={(e) => handleRequsetLevelList(e)}>
            Level 2
          </Button>
        </Select>
        <Select>
          <Button value="3" onClick={(e) => handleRequsetLevelList(e)}>
            Level 3
          </Button>
        </Select>
        <Select>
          <Button>미션후기작성</Button>
        </Select>
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
