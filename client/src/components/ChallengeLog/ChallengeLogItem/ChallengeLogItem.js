import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import {
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  WishBtn,
  Img,
} from "./ChallengeLogStyle";

const ChallengeListItem = ({ log }) => {
  const state = useSelector((state) => state.infoReducer);

  return (
    <ServicesCard>
      <ServicesIcon background={log.img} />
      <ServicesH2>{log.name}</ServicesH2>
      <ServicesP></ServicesP>
    </ServicesCard>
  );
};

export default ChallengeListItem;
