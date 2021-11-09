// 전체 좋아요 받아오는 틀. ChallengeLogItem 참고
// 여기서 맵핑 돌려서 LikeList로
// ! LikeListItem용으로 수정해야함 (style.js도)
import React from "react";
import {
  CardContainer,
  ChallengeCard,
  CardInner,
  ChallengeImg,
  LikeConatainer,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "../../.././Challenge/ChallengeListItem/ChallengeListItemStyle";

const LikeListItem = ({ list }) => {
  console.log(list);
  return (
    <>
      <CardContainer>
        <CardInner>
          <ChallengeCard background={list.img}>
            <ChallengeImg src={list.img} />
            <LikeConatainer></LikeConatainer>
          </ChallengeCard>
        </CardInner>
      </CardContainer>
    </>
  );
};

export default LikeListItem;
