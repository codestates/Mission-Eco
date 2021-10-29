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
      <ServicesH2>{log.challengelog_contents}</ServicesH2>
      <ServicesP>{log.createdAt}</ServicesP>
    </ServicesCard>
  );
};

export default ChallengeListItem;
