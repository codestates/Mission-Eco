import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";
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
  const dispatch = useDispatch();
  //const [allLists, setAllLists] = useState([]);
  const [listLog, setListLog] = useState([]);
  const [listName, setListName] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:4000/challenge-log", {
        withCredentials: true,
      })
      .then((res) => {
        //console.log("log----------0-0-0", res.data.challengeLogList);
        //challengeLogList, challengeList
        dispatch(getChallengeLogList(res.data.challengeLogList));
        //setAllLists(res.data.challengeLogList);
        setListLog(res.data.challengeLogList);
        setListName(res.data.challengeList);
        //console.log(challengeLogList.logList);
      });
  }, [dispatch]);

  const challengeLogList = useSelector(
    (state) => state.infoReducer.challengeLogList
  );

  const dropBtnClick = () => {
    setIsActive(!isActive);
  };
  const handleRequsetLogList = (e) => {
    const log = e.target.value;
    //해당 log를 누르면 list state에 저장된 list값들중 해당로그를 찾아서 setList로 바꾼다.
    let logItem = challengeLogList.logList.map((list) => list);
    let logId = logItem.filter((el) => el.challenge_id === Number(log));
    setListLog(logId);
  };

  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission Log</ServicesH1>
      <Subbar>
        <Dropdown>
          <DropButton onClick={dropBtnClick}>
            <span>클릭하면 목록이 주루룩~</span>
          </DropButton>
          <Dropdowncontent isActive={isActive}>
            <List>All</List>
            {listName.map((log, idx) => {
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
        </Dropdown>{" "}
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
        {listLog.map((log, idx) => {
          return <ChallengeLogItem log={log} key={idx} />;
        })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeLogList;
