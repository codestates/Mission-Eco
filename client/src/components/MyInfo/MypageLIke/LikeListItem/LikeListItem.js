import React from "react";
import {
  CardContainer,
  ChallengeCard,
  CardInner,
  ChallengeImg,
  LikeConatainer,
} from "../../MypageLIke/LikeListItem/LikeListItemStyle";

const LikeListItem = ({ list }) => {
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
