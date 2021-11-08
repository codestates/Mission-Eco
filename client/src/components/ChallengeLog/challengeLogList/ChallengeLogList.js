import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";
import blobMenu from "../../../imges/blobMenu.svg";
import {
  ChallengeLogContiner,
  ChallengeLogH1,
  ChallengeLogWrapper,
  Dropdown,
  ChallengeP,
  ChallengeSubbar,
  Select,
  Button,
  DropButton,
  Dropdowncontent,
  List,
  Img,
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
  const [listLog, setListLog] = useState(challengeLog);
  const [nodata, setNodata] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);

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
      if (logId.length === 0) {
        setNodata(true);
      } else {
        setListLog(logId);
        setNodata(false);
      }

      console.log(logId);
    }
  };

  return (
    <ChallengeLogContiner id="services">
      <ChallengeLogH1>Mission Log</ChallengeLogH1>
      <span>미션에 참여한 유저들의 로그를 확인해보세요!</span>
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
          <Button>
            <ChallengeP>미션후기작성</ChallengeP>
          </Button>
        </Select>
      </ChallengeSubbar>
      <ChallengeLogWrapper>
        {listLog && nodata ? (
          <ChallengeLogItem nodata={true} />
        ) : (
          listLog &&
          listLog.map((log, idx) => {
            return <ChallengeLogItem log={log} key={idx} />;
          })
        )}
      </ChallengeLogWrapper>
    </ChallengeLogContiner>
  );
};

export default ChallengeLogList;
