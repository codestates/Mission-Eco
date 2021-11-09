import React from "react";
import { TR, TD, IMG } from "./ChallengeItemStyle";

const ChallengeItem = ({ challenge }) => {
  return (
    <>
      <TR>
        <TD>{challenge.id}</TD>
        <TD>{challenge.name}</TD>
        <TD>{challenge.contents}</TD>
        <TD>{challenge.level}</TD>
        <TD>
          <IMG src={challenge.img} alt="challenge image" />
        </TD>
      </TR>
    </>
  );
};

export default ChallengeItem;
