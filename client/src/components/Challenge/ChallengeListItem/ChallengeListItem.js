import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Like from "../../Like/Like";
import { addLike, deleteLike } from "../../../Redux/actions";
import {
  ChallengeCard,
  ChallengeH2,
  ChallengeP,
  CardContainer,
  LikeConatainer,
  DetailCard,
  CardInner,
  ChallengeImg,
} from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list, userId, isLogin }) => {
  const dispatch = useDispatch();
  const [like, setlike] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
              <ChallengeH2>{list.name}</ChallengeH2>
              <ChallengeP>
                전 세계에서 삭제 되지 않은 스팸 메일로 인해 매년 330억 kW의
                전기가 소모되고 있습니다. 읽지 않은 이메일을 삭제 해보세요.
              </ChallengeP>
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
        {/*!isFlipped ? (
        <ServicesCard
          background={list.img}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => {
            setIsFlipped(false);
          }}
        >
          <ServicesH2>{list.name}</ServicesH2>
          <ServicesP>dfdsfs</ServicesP>
          {isOpenModal ? (
            <LikeConatainer>
              <Like
                onClick={toggleLike}
                list={list}
                like={like}
                isLogin={isLogin}
              />
              "로그인이 필요합니다 모달창 ."
            </LikeConatainer>
          ) : (
            <LikeConatainer>
              <Like
                onClick={toggleLike}
                list={list}
                like={like}
                isLogin={isLogin}
                likeNum={likeNum}
              />
            </LikeConatainer>
          )}
        </ServicesCard>
      ) : (
        <ServicesCard
          //className={isFlipped ? "flipped" : ""}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => {
            setIsFlipped(false);
          }}
        >
          <h2>{list.name}</h2>
          <p>
            Provident consectetur natus voluptatem quis tenetur sed beatae eius
            sint.
          </p>
          <ServicesP>{list.contents}</ServicesP>
          {isOpenModal ? (
            <LikeConatainer>
              <Like
                onClick={toggleLike}
                list={list}
                like={like}
                isLogin={isLogin}
              />
              "로그인이 필요합니다 모달창 ."
            </LikeConatainer>
          ) : (
            <LikeConatainer>
              <Like
                onClick={toggleLike}
                list={list}
                like={like}
                isLogin={isLogin}
                likeNum={likeNum}
              />
            </LikeConatainer>
          )}
        </ServicesCard>
          )*/}
      </CardContainer>
    </>
  );
};

export default ChallengeListItem;
