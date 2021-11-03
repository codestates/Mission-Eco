import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";
import blobMenu from "../../../imges/blobMenu.svg";
import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  Dropdown,
  ServicesP,
  Subbar,
  Select,
  Button,
  DropButton,
  Dropdowncontent,
  List,
} from "./ChallengeLogListStyle";

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
    <ServicesContiner id="services">
      <ServicesH1>Mission Log</ServicesH1>
      <Subbar>
        <Dropdown>
          <DropButton onClick={dropBtnClick}>
            <img src={blobMenu} alt="blobkmenu" />
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
            <ServicesP>All</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 1</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 2</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 3</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>미션후기작성</ServicesP>
          </Button>
        </Select>
      </Subbar>
      <ServicesWrapper>
        {!isActive
          ? challengeLogList &&
            challengeLogList.map((log, idx) => {
              return <ChallengeLogItem log={log} key={idx} />;
            })
          : listLog &&
            listLog.map((log, idx) => {
              return <ChallengeLogItem log={log} key={idx} />;
            })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeLogList;
