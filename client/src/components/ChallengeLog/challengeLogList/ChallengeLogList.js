import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
import { getChallengeLogList } from "../../../Redux/actions";

import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  ServicesP,
  SubbarWrapper,
  Subbar,
  Button,
  SubTxt,
  SelectLogBox,
  SelectLog,
  Optioon,
} from "./ChallengeLogListStyle";
require("dotenv").config();

const ChallengeLogList = () => {
  const logList = useSelector((state) => state.infoReducer.challengeLogList);
  const dispatch = useDispatch();
  const { challengeList, challengeLogList } = logList;
  const [listLog, setListLog] = useState(challengeLogList);
  const [isAll, setIsAll] = useState(false);

  // DB에 데이타 변경되면(챌린지가)
  // 첼린지가 가능한 챌린지만 축출함
  const availbleChallenges =
    challengeList &&
    challengeList.reduce((acc, log) => {
      if (log.id === 1 || log.id === 2 || log.id === 8 || log.id === 12) {
        acc.push(log);
      }
      return acc;
    }, []);

  const options =
    availbleChallenges &&
    availbleChallenges.map((log) => {
      return <option value={log.id}>{log.name}</option>;
    });

  console.log("availbleChallenges-------", availbleChallenges);

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);

  // 클릭된 옵션에 따라서 로그 리스트를 달리 보여줌
  const handleRequsetLogList = (e) => {
    const ChallengeId = e.target.value;
    console.log("e.target.valuee.target.value==", e.target.value);

    // 모든 리스트를 다보여준다
    if (Number(ChallengeId) === 0) {
      setListLog(challengeLogList);
    } else {
      // 그외 숫자면 challengeLogList id와 클릭된 ChallengeId가 일치하는 로그들을 보여준다
      const ClickedLog = challengeLogList.filter(
        (log) => log.challenge_id === Number(ChallengeId)
      );
      console.log("ClickedLog ===> ", ClickedLog);
      setListLog(ClickedLog);
    }
  };

  // 챌린지 할 수 있는 챌린지만 분류
  // 분류된 챌린지를 맵을 돌려 랜더링한다 (option 태그)

  // 처음에는 모든 리스트를 다보여주고, 리스트가 선택되면 클린된 로그 카테고리만 보여줌
  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission Log</ServicesH1>
      <SubTxt>회원들이 참여한 미션 로그를 구경해 보세요.</SubTxt>
      <SubbarWrapper>
        <Subbar>
          <SelectLogBox>
            <SelectLog onChange={handleRequsetLogList}>
              <Optioon value="0">클릭하면 목록이 주르륵~</Optioon>
              {availbleChallenges &&
                availbleChallenges.map((log) => {
                  return <Optioon value={log.id}>{log.name}</Optioon>;
                })}
            </SelectLog>
          </SelectLogBox>
          <ServicesP>
            <Button>미션 하러Go</Button>
          </ServicesP>
        </Subbar>
      </SubbarWrapper>
      <ServicesWrapper>
        {listLog &&
          listLog.map((log, idx) => {
            return <ChallengeLogItem log={log} key={idx} />;
          })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeLogList;
