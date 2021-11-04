import React from "react";
import {
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
} from "./ChallengeLogStyle";

const ChallengeListItem = ({ log }) => {
  return (
    <ServicesCard>
      <ServicesIcon background={log.img} />
      <ServicesP>#{log.challenge.name}</ServicesP>
      <ServicesH2>{log.challengelog_contents}</ServicesH2>
      <ServicesP>닉네임:{log.user.nickname}</ServicesP>
      <ServicesP>{log.createdAt}</ServicesP>
    </ServicesCard>
  );
};

export default ChallengeListItem;
