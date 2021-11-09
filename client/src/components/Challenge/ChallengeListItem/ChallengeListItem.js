import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Like from "../../Like/Like";
import { addLike, deleteLike } from "../../../Redux/actions";
import {
  ChallengeCard,
  ChallengeH3,
  ChallengeP,
  CardContainer,
  LikeConatainer,
  DetailCard,
  CardInner,
  ChallengeImg,
} from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list, userId, isLogin, setIsOpenModal }) => {
  const dispatch = useDispatch();
  const [like, setlike] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const challengeId = list.id;
  const likeNum = list.challengelikes.length;

  useEffect(() => {
    const liked = list.challengelikes.map((el) => el.user_id);
    if (liked.includes(userId)) {
      setlike(true);
    } else {
      setlike(false);
    }
  }, [list, userId]);

  const toggleLike = async (e) => {
    const Alt = e.target.id;

    if (!isLogin) {
      setIsOpenModal(true);
    } else if (Alt === "disliked") {
      dispatch(addLike(challengeId));
      setlike(true);
    } else {
      dispatch(deleteLike(challengeId));
      setlike(false);
    }
  };

  return (
    <>
      <CardContainer
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <CardInner className={isFlipped ? "flipped" : ""}>
          {!isFlipped ? (
            <ChallengeCard background={list.img}>
              <ChallengeImg src={list.img} />
              <LikeConatainer>
                <Like
                  onClick={toggleLike}
                  list={list}
                  like={like}
                  isLogin={isLogin}
                  likeNum={likeNum}
                />
              </LikeConatainer>
            </ChallengeCard>
          ) : (
            <DetailCard background={list.img}>
              <ChallengeH3>{list.name}</ChallengeH3>
              <ChallengeP>{list.contents}</ChallengeP>
              <LikeConatainer>
                <Like
                  onClick={toggleLike}
                  list={list}
                  like={like}
                  isLogin={isLogin}
                  likeNum={likeNum}
                />
              </LikeConatainer>
            </DetailCard>
          )}
        </CardInner>
      </CardContainer>
    </>
  );
};

export default ChallengeListItem;
