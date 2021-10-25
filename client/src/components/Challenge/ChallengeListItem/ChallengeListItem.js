import React from "react";
import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Subbar,
  Select,
  ServicesCardColor,
  Button,
  WishBtn,
} from "./ChallengeListItemStyle";

const ChallengeListItem = (props) => {
  return (
    <ServicesWrapper>
      <ServicesCard>
        <ServicesH2>플로깅</ServicesH2>
        <ServicesP></ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesH2>플로깅</ServicesH2>
        <ServicesP></ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesH2>플로깅</ServicesH2>
        <ServicesP></ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesH2>플로깅</ServicesH2>
        <ServicesP></ServicesP>
      </ServicesCard>
    </ServicesWrapper>
  );
};

export default ChallengeListItem;
