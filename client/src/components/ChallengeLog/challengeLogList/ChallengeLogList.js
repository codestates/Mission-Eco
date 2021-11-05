import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";
import blobMenu from "../../../imges/blobMenu.svg";
import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  ServicesP,
  SubbarWrapper,
  Subbar,
  Button,
} from "./ChallengeLogListStyle";
require("dotenv").config();

const ChallengeLogList = () => {
  const logList = useSelector((state) => state.infoReducer.challengeLogList);
  const dispatch = useDispatch();
  const { challengeList, challengeLogList } = logList;
  const [listLog, setListLog] = useState([]);
  const [isAll, setIsAll] = useState(false);
  
  // 첼린지가 가능한 챌린지만 축출
  const availbleChallenges = challengeList && challengeList.reduce((acc, log) => {
    // DB에 모든 데이타가 심어지면, 아이디값 확인하고 수정하기
   if(log.id === 1 || log.id === 2  || log.id === 8 || log.id === 12 ) {
     acc.push(log);
   }
   return acc
  }, []);

  const options = availbleChallenges.map((log) => {
    return <option value={log.id}>{log.name}</option>
  });

  console.log('availbleChallenges-------', availbleChallenges)

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);


  const handleRequsetLogList = (e) => {
    const ChallengeId = e.target.value;
    console.log('e.target.valuee.target.value==', e.target.value)

    // Number(value)가 0이면 모든 리스트를 다보여준다 
    // 그외 숫자면 logList id와 ChallengeId가 일치하는 로그들을 보여준다
    if (Number(ChallengeId) === 0 && challengeLogList) {
      setListLog(challengeLogList);
    } else {
      const ClickedLog = challengeLogList && challengeLogList.filter(
        log => log.challenge_id === Number(ChallengeId)
      );
      console.log('ClickedLog ===> ', ClickedLog)
      setListLog(ClickedLog);
    }

  };
  
  // 챌린지 할 수 있는 챌린지만 분류
  // 맵을 돌려 랜더링한다
  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission Log</ServicesH1>
      <SubbarWrapper>
        <Subbar>
          <select onChange={handleRequsetLogList}>
            <option value="0" >클릭하면 목록이 주르륵~</option>
            {options}
          </select>
          <Button>
            <ServicesP>미션후기작성</ServicesP>
          </Button>
        </Subbar>
      </SubbarWrapper>
      <ServicesWrapper>
        {listLog.map((log, idx) => {
              return <ChallengeLogItem log={log} key={idx} />;
        })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeLogList;
