import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeList } from "../../../Redux/actions";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";
import LoadingIndicator from "../../Loading/LoadingIndicator";
import { ScrollTopBtn } from "../../ScrollTop/ScrollTopBtn";
import UseScroll from "../../UseScroll/UseScroll";
import Modal from "../../Modal/Modal";

import {
  ChallengeContiner,
  ChallengeH1,
  ChallengeP,
  ChallengeWrapper,
  ChallengeSubbar,
  ChallengeSelect,
  Button,
  ChallengeLink,
  LoadingeWrapper,
} from "./ChallengeListStyle";

const ChallengeList = () => {
  const dispatch = useDispatch();
  const challengeList = useSelector((state) => state.infoReducer.challengeList);
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [listItems, setListItems] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clickLevel, setClickLevel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [missionList, setMissionList] = useState(0);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    dispatch(getChallengeList()).then((res) => {
      setResult(res.payload.slice(0, 6));
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {}, [challengeList]);

  const [isFetch, setIsFetch] = UseScroll(requestChallengeList);

  function requestChallengeList() {
    setMissionList(missionList + 6);
    setResult(
      result.concat(challengeList.slice(missionList + 6, missionList + 12))
    );
    setIsFetch(false);
  }

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const handleRequsetLevelList = (e) => {
    const level = e.target.value;
    //console.log(level);
    if (Number(level) === 0) {
      //setAll(true);
      setListItems(challengeList);
    } else {
      const itemLevel = challengeList.filter(
        (el) => el.level === Number(level)
      );
      setListItems(itemLevel);
      setClickLevel(true);
      //setAll(false);
    }
  };

  return (
    <>
      <ChallengeContiner id="services">
        <ChallengeH1>Mission List</ChallengeH1>
        <ChallengeP className="subTitle">
          여러가지 미션들을 확인해보세요. 카드가 뒤집히걸랑?!
        </ChallengeP>
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
          <ChallengeSelect className="upload">
            <ChallengeLink to="/upload">
              <ChallengeP>미션후기작성</ChallengeP>
            </ChallengeLink>
          </ChallengeSelect>
        </ChallengeSubbar>
        {isLoading ? (
          <LoadingeWrapper>
            <LoadingIndicator />
          </LoadingeWrapper>
        ) : (
          <ChallengeWrapper>
            {challengeList && result && !clickLevel
              ? result.map((list, idx) => {
                  return (
                    <ChallengeListItem
                      list={list}
                      key={idx}
                      userId={userInfo.id}
                      isLogin={isLogin}
                      setIsOpenModal={setIsOpenModal}
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
                      setIsOpenModal={setIsOpenModal}
                    />
                  );
                })}
            {isFetch ? <LoadingIndicator /> : null}
            {isOpenModal ? (
              <Modal
                msg={"로그인이 필요합니다."}
                msg2={"로그인"}
                link={"/login"}
                closeModalHandler={closeModalHandler}
              />
            ) : null}
          </ChallengeWrapper>
        )}
        {isFetch ? requestChallengeList() : null}
      </ChallengeContiner>
      <ScrollTopBtn />
    </>
  );
};

export default ChallengeList;
