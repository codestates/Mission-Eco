// 전체 좋아요 받아오는 틀. ChallengeLogItem 참고
// 여기서 맵핑 돌려서 ListItem으로
import React from "react";
import ChallengeListItem from "../../../ChallengeLog/ChallengeLogItem/ChallengeLogItem";

const LikeListItem = ({ log }) => {
  return (
    <>
      <ServicesCard>
        <ServicesIcon background={log.img} />
        <ServicesH2>{log.challengelog_contents}</ServicesH2>
        <ServicesP>닉네임:{log.user.nickname}</ServicesP>
        <ServicesP>{log.createdAt}</ServicesP>
      </ServicesCard>
    </>
  );
};

export default LikeListItem;
