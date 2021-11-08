import React from "react";

import { ReactComponent as Delete } from "../../../../imges/delete.svg";

import {
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  DeleteBtn,
} from "./LogItemStyle";

const LogItem = ({ log, deleteHandler }) => {
  const { id, img, challengelog_contents, challenge, user, createdAt } = log;
  const userNickname = user.nickname;
  const challengeName = challenge.name;

  return (
    <ServicesCard>
      <DeleteBtn>
        <Delete onClick={() => deleteHandler(id)} />
      </DeleteBtn>
      <ServicesIcon background={img} />
      <ServicesP>{challengeName}</ServicesP>
      <ServicesP>작성자 : {userNickname}</ServicesP>
      <ServicesP>{createdAt}</ServicesP>
      <ServicesH2>{challengelog_contents}</ServicesH2>
    </ServicesCard>
  );
};

export default LogItem;
