import React from "react";
import { useEffect } from "react";
import Nodata from "../../Nodata/Nodata";
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

const ChallengeListItem = ({ log, nodata }) => {
  // const state = useSelector((state) => state.infoReducer);
  // console.log("log확인", log);

  return (
    <>
      {!nodata ? (
        <LogCardContatainer background={log.img}>
          <LogImgContainer>
            <LogImg src={log.img} />
          </LogImgContainer>
          <LogContent>
            <LogHashP> {log.challenge.name}</LogHashP>
            <NameNtime>
              <LogP>닉네임:{log.user.nickname}</LogP>
              <LogP className="time">{log.createdAt.substring(0, 10)}</LogP>
            </NameNtime>
            <LogH2>{log.challengelog_contents}</LogH2>
          </LogContent>
        </LogCardContatainer>
      ) : (
        <Nodata />
      )}
    </>
  );
};

export default ChallengeListItem;
