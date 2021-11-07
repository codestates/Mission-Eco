import React from "react";
import {
  LogCardContatainer,
  LogH2,
  LogP,
  LogImgContainer,
  LogImg,
  NameNtime,
  LogHashP,
  LogContent,
} from "./ChallengeLogStyle";

const ChallengeListItem = ({ log }) => {
  // const state = useSelector((state) => state.infoReducer);

  return (
    <LogCardContatainer background={log.img}>
      <LogImgContainer>
        <LogImg src={log.img} />
      </LogImgContainer>
      <LogContent>
        <LogHashP># {log.challenge.name}</LogHashP>
        <NameNtime>
          <LogP>닉네임:{log.user.nickname}</LogP>
          <LogP className="time">{log.createdAt.substring(0, 10)}</LogP>
        </NameNtime>
        <LogH2>{log.challengelog_contents}</LogH2>
      </LogContent>
    </LogCardContatainer>
  );
};

export default ChallengeListItem;
