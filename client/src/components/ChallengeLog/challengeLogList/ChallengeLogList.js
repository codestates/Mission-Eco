import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";
import Nodata from "../../Nodata/Nodata";
import {
  ChallengeLogContiner,
  ChallengeLogH1,
  ChallengeLogWrapper,
  Dropdown,
  ChallengeP,
  ChallengeSubbar,
  Select,
  Button,
  ChallengeLink,
  DropButton,
  Dropdowncontent,
  List,
  Img,
  NodataWrapper,
} from "./ChallengeLogListStyle";

require("dotenv").config();

const ChallengeLogList = () => {
  const logList = useSelector((state) => state.infoReducer.challengeLogList);
  const dispatch = useDispatch();
  const { challengeList, challengeLogList } = logList;
  const challengeLog =
    challengeLogList &&
    challengeLogList.sort(function (a, b) {
      return b.id - a.id;
    });
  const [listLog, setListLog] = useState([]);
  const [nodata, setNodata] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);

  useEffect(() => {}, [logList]);

  const dropBtnClick = () => {
    // setListLog(challengeLog);
    setIsActive(!isActive);
  };
  const handleRequsetLogList = (e) => {
    const log = e.target.value;
    if (Number(log) === 0) {
      setIsActive(false);
      setListLog(challengeLog);
      setNodata(false);
    } else {
      let logId = challengeLog.filter((el) => el.challenge_id === Number(log));
      if (logId.length !== 0) {
        setListLog(logId);
        setNodata(false);
        setIsActive(!isActive);
      } else {
        setNodata(true);
      }

      console.log(logId);
    }
  };

  return (
    <ChallengeLogContiner id="services">
      <ChallengeLogH1>Mission Log</ChallengeLogH1>
      <ChallengeP className="subTitle">
        미션에 참여한 유저들의 로그를 확인해보세요!
      </ChallengeP>
      <ChallengeSubbar>
        <Dropdown>
          <DropButton onClick={dropBtnClick}>
            <ChallengeP>미션 선택</ChallengeP>
          </DropButton>
          <Dropdowncontent isActive={isActive}>
            <List onClick={(e) => handleRequsetLogList(e)}>All</List>
            {challengeList &&
              challengeList.map((log, idx) => {
                return (
                  <List
                    key={idx}
                    value={log.id}
                    onClick={(e) => handleRequsetLogList(e)}
                  >
                    {log.name}
                  </List>
                );
              })}
          </Dropdowncontent>
        </Dropdown>

        <Select>
          <ChallengeLink to="/upload">
            <ChallengeP>미션후기작성</ChallengeP>
          </ChallengeLink>
        </Select>
      </ChallengeSubbar>
      {nodata ? (
        <NodataWrapper>
          <Nodata />
        </NodataWrapper>
      ) : (
        <ChallengeLogWrapper>
          {!isActive
            ? challengeLogList &&
              challengeLogList.map((log, idx) => {
                return <ChallengeLogItem log={log} key={idx} />;
              })
            : listLog &&
              listLog.map((log, idx) => {
                return <ChallengeLogItem log={log} key={idx} />;
              })}
        </ChallengeLogWrapper>
      )}
    </ChallengeLogContiner>
  );
};

export default ChallengeLogList;
