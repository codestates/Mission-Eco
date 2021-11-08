import React from "react";
//import ChallengeList from "../../components/Challenge/challengeList/ChallengeList";
import ChallengeLogList from "../../components/ChallengeLog/challengeLogList/ChallengeLogList";
import { ChallengeLogContainer } from "./ChallengeLogStyle";

function ChallengeLog() {
  return (
    <ChallengeLogContainer>
      <ChallengeLogList />
    </ChallengeLogContainer>
  );
}

export default ChallengeLog;
