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
      <ServicesH2>{log.challengelog_contents}</ServicesH2>
      <ServicesP>{log.createdAt}</ServicesP>
    </ServicesCard>
  );
};

export default ChallengeListItem;
