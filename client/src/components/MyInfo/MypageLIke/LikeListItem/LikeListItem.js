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
} from "../../.././Challenge/ChallengeListItem/ChallengeListItemStyle";

const LikeListItem = ({ list }) => {
  return (
    <>
      {/* // * 여기가 문제 */}
      <CardContainer>
        <CardInner>
          <ChallengeCard background={list.img}>
            {/* //* 요 위에까지가 문제. ChallengeImg 사이즈랑 일치시켜라 */}
            <ChallengeImg src={list.img} />
            <LikeConatainer></LikeConatainer>
          </ChallengeCard>
        </CardInner>
      </CardContainer>
    </>
  );
};

export default LikeListItem;
