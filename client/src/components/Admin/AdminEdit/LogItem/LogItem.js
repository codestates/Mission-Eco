import React from "react";
import {
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
} from "./LogItemStyle";

const LogItem = ({ log }) => {
  console.log("log--", log);
  const { img, challengelog_contents, challenge, user, createdAt } = log;
  const userNickname = user.nickname;
  const challengeName = challenge.name;
  return (
    <ServicesCard>
      <ServicesIcon background={img} />
      <ServicesP>{challengeName}</ServicesP>
      <ServicesP>작성자 : {userNickname}</ServicesP>
      <ServicesP>{createdAt}</ServicesP>
      <ServicesH2>{challengelog_contents}</ServicesH2>
    </ServicesCard>
  );
};

export default LogItem;
