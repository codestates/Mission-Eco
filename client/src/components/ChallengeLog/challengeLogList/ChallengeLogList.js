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
  Subbar,
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
  const [listLog, setListLog] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);

  const dropBtnClick = () => {
    setListLog(challengeLogList);
    setIsActive(!isActive);
  };
  const handleRequsetLogList = (e) => {
    const log = e.target.value;
    if (Number(log) === 0) {
      setIsActive(false);
    }
    let logId = challengeLogList.filter(
      (el) => el.challenge_id === Number(log)
    );
    setListLog(logId);
  };

  return (
    <ChallengeLogContiner id="services">
      <ChallengeLogH1>Mission Log</ChallengeLogH1>
      <ChallengeSubbar>
        <Dropdown>
          <DropButton onClick={dropBtnClick}>
            <span>클릭하면 목록이 주루룩~</span>
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
    </ChallengeLogContiner>
  );
};

export default ChallengeLogList;
